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
  } catch (err) {
    // Ensure `err` is of type `Error` to access `message`
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    // If it's not an instance of Error, return a generic message
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
