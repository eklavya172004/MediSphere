import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const cookieStore =  cookies();
  const supabase = createRouteHandlerClient({
    cookies: () => Promise.resolve(cookieStore),  // Wrap in Promise.resolve()
  });
  
//   const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  await supabase.auth.signOut();

  // Redirect to login page or homepage after logout
  return NextResponse.redirect(new URL("/login", req.url));
}