// app/auth/signup-doctor/route.ts

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const formData = await req.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const doctorId = formData.get("doctor_id") as string;
  const firstname = formData.get("first_name") as string;
  const lastname = formData.get("last_name") as string;
  const specialization = formData.get("specialization") as string;
  const contact = formData.get("contact") as string;

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const url = new URL(req.url);

  // Step 1: Sign up with Supabase Auth
  const { data, error} = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const userId = data.user?.id;
  if (!userId) {
    return NextResponse.json({ error: "User ID not found" }, { status: 400 });
  }

  // Step 2: Insert doctor data
  const { error: dbError } = await supabase
    .from("doctor")
    .insert([
      {
        doctorid: doctorId,
        user_id: userId,
        name: `${firstname} ${lastname}`,
        specialization,
        contact
      },
    ]);

    if (dbError) {
      console.error("Error inserting patient:", dbError,data);  // Log the full error object
      return NextResponse.redirect(url.origin + "/login", {
        status: 301,
      });
    }

  // return NextResponse.redirect(new URL("/login", req.url));
  return NextResponse.redirect(url.origin, { status: 301 });
} 