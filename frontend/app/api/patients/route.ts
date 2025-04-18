import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";


export async function GET(){
    const {data,error} = await supabase
                                .from('patient')
                                .select("*");

    if(error){
        return NextResponse.json({error:error.message},{status:500})
    }

    return NextResponse.json({patient:data},{status:200});
}