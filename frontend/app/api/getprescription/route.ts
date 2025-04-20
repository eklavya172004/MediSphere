import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// import type { Database } from '@/types/supabase';
export async function GET(){

    type Prescription = {
        prescriptionid: string;
        doctorid: string;
        patientid: string;
        issuedate: string;
        dosageinstruction?: string;
        courseduration?: string;
        medid?: string;
        quantity?: number;
        consultationdate?: string;
      };    

      const cookieStore =  cookies();
      const supabase = createRouteHandlerClient({
        cookies: () => (cookieStore),  // Wrap in Promise.resolve()
      });
      
    const {data:{user},error:userError} = await supabase.auth.getUser();

    // console.log(user);

    if (userError || !user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }


    //   console.log(user.id);
    const { data: doctor, error: doctorError } = await supabase
    .from("doctor")
    .select("doctorid")
    .eq("user_id", user.id) // Change this if your column name is different
    .single();

    if (doctorError || !doctor) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }


      const {data,error} = await supabase
      .from('prescription')
      .select("*")
      .eq("doctorid",doctor.doctorid);


  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ prescriptions: data as Prescription[] }, { status: 200 });
}