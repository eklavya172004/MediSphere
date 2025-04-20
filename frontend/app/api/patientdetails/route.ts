import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore =  cookies();
  const supabase = createRouteHandlerClient({
    cookies: () => (cookieStore),  // Wrap in Promise.resolve()
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch patient details
  const { data: patient, error: patientError } = await supabase
    .from("patient")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (patientError || !patient) {
    return NextResponse.json({ error: "Patient not found" }, { status: 404 });
  }

  // Fetch prescriptions (this may return an empty array, which is okay)
  const { data: prescriptions, error: prescriptionError } = await supabase
    .from("prescription")
    .select("*")
    .eq("patientid", patient.patientid);

  // Log error for debugging, but don’t block if prescriptions is just empty
  if (prescriptionError) {
    console.error("Prescription fetch error:", prescriptionError.message);
    return NextResponse.json({
      patient,
      prescriptions: [],
      warning: "Error fetching prescriptions",
    });
  }

  return NextResponse.json({ patient, prescriptions });
}
