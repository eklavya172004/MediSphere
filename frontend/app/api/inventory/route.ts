// backend/app/api/inventory/route.ts
import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const data = await req.json();

  const { error } = await supabase.from("inventory").insert(data);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
