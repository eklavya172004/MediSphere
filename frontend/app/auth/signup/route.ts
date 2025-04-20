import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies(); // ✅ do NOT await this
  const supabase = createServerActionClient({ cookies:   () => cookieStore }); // ✅ use like this

  const formData = await req.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstname = formData.get("first_name") as string;
  const lastname = formData.get("last_name") as string;
  const dob = formData.get("dob") as string;
  const phone = (formData.get("phone") as string);
  const gender = (formData.get("gender") as string);
  const relationship = formData.get("relationship") as string;
  const patient_id = parseInt(formData.get("patient_id") as string);
  const problem = formData.get("problem") as string;

  const url = new URL(req.url);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${url.origin}/auth/callback`,
    },
  });

  if (error || !data.user) {
    return NextResponse.redirect(`${url.origin}/`, { status: 301 });
  }


  const { error: insertError } = await supabase.from("patient").insert({
    patientid: patient_id,
    firstname,
    lastname,
    dob: new Date(dob).toISOString().split('T')[0],
    phone,
    relationship,
    user_id: data.user.id,
    gender,                 // dummy value to satisfy schema
    name: `${firstname} ${lastname}`,
    problem
    // role:"patient"
  });

  if (insertError) {
    console.error("Error inserting patient:", insertError,data.user.id);  // Log the full error object
    return NextResponse.redirect(url.origin + "/login", {
      status: 301,
    });


  }
  return NextResponse.redirect(url.origin+"/login", { status: 301 });
}
