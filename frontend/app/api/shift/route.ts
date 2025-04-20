import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { shiftid, starttime, night, morning, evening, receptionistid } = body;

    if (!shiftid || !starttime || receptionistid === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabase.from("shift").insert({
      shiftid,
      starttime,
      night,
      morning,
      evening,
      receptionistid,
    });

    if (error) throw error;

    return NextResponse.json({ message: "Shift added successfully" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
