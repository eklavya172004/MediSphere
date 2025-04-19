import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
// NextResponse: This helps return HTTP responses like JSON or redirects in a Next.js API route.



export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = [
      'patientid', 
      'doctorid', 
      'dosageinstruction',
      'issuedate', 
      'courseduration', 
      // 'medid', 
      'quantity', 
      'consultationdate'
    ];

    console.log(body);

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const prescription = {
      ...body,
      prescriptionid: body.prescriptionid || undefined,
      courseduration: parseInt(body.courseduration, 10),
      quantity: parseInt(body.quantity, 10),
      issuedate: body.issuedate,
      consultationdate: body.consultationdate
    };

    const { data, error } = await supabase
      .from('prescription')
      .insert(prescription)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);

      if (error.code === '23505') {
        return NextResponse.json({ 
          error: "A prescription with this ID already exists" 
        }, { status: 409 });
      }

      if (error.code === '23503') {
        return NextResponse.json({ 
          error: "Invalid reference: Patient, doctor, medicine, or bill ID does not exist" 
        }, { status: 400 });
      }

      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // ✅ Redirect to the doctor landing page after success
    return NextResponse.json({ 
      message: "Prescription created successfully" 
    }, { status: 200 });

  } catch (error) {
    console.error('Failed to create prescription:', error);
    return NextResponse.json({ 
      error: "Failed to create prescription" 
    }, { status: 500 });
  }
}
