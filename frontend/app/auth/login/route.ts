import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { data } from "motion/react-client";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // const cookieStore =  cookies();
  const formData = await req.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const cookieStore =  cookies()
  const supabase = createRouteHandlerClient({ cookies:  () => cookieStore });

  
  const { data,error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    let message = "Invalid credentials";

    if (error.code === "email_not_confirmed") {
      message = "Please confirm your email before logging in.";
    } else if (error.code === "invalid_login_credentials") {
      message = "Invalid email or password.";
    } else if (error.code === "invalid_email") {
      message = "That email address doesn’t look right.";
    } else if (error.code === "rate_limit_exceeded") {
      message = "Too many login attempts. Please try again later.";
    }

    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("error", message);
    
    return NextResponse.redirect(loginUrl);
  }

  const userID = data.user?.id;

    const {data:doctor} = await supabase.from('doctor').select('*').eq("user_id",userID).single();
    
    const {data:receptionist} = await supabase.from('receptionist').select('*').eq("user_id",userID).single();
    
    const {data:patient} = await supabase.from('patient').select('*').eq("user_id",userID).single();


    if(doctor || receptionist){
      return NextResponse.redirect(new URL("/doc_dashboard", req.url),303);
    }

    if (patient) {
      return NextResponse.redirect(new URL("/profile", req.url),303);
    }

  return NextResponse.redirect(new URL("/", req.url));
}
