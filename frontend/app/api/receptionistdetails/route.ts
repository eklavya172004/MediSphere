import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: receptionist, error: receptionistError } = await supabase
    .from("receptionist")
    .select("*")
    .eq("receptionistid", user.id)
    .single();

    console.log(receptionist)

  if (receptionistError || !receptionist) {
    return NextResponse.json({ error: "Receptionist not found" }, { status: 404 });
  }

  const { data: shift, error: shiftError } = await supabase
    .from("shift")
    .select("*")
    .eq("receptionistid", receptionist.receptionistid)
    .single();

  if (shiftError) {
    return NextResponse.json({ receptionist, shift: null }, { status: 200 });
  }

  return NextResponse.json({ receptionist, shift }, { status: 200 });
}
