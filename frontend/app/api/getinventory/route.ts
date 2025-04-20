// backend/app/api/getinventory/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const { data, error } = await supabase.from("inventory").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ inventory: data });
}
