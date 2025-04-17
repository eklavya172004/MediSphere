import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      // Parse the incoming request body
      const body = await request.json();
      
      // Validate required fields
      const requiredFields = [
        'patientid', 
        'doctorid', 
        'dosageinstruction',
        'issuedate', 
        'courseduration', 
        'medid', 
        'quantity', 
        'consultationdate'
      ];
      
      for (const field of requiredFields) {
        if (!body[field]) {
          return NextResponse.json(
            { error: `Missing required field: ${field}` },
            { status: 400 }
          );
        }
      }
      
      // Convert string values to appropriate types
      const prescription = {
        ...body,
        // If prescriptionid is empty, let Supabase generate it (if set up with uuid extension)
        prescriptionid: body.prescriptionid || undefined,
        courseduration: parseInt(body.courseduration, 10),
        quantity: parseInt(body.quantity, 10),
        // Keep date strings as ISO format for Supabase
        issuedate: body.issuedate,
        consultationdate: body.consultationdate
      };
      
      // Insert the prescription into the Supabase table
      const { data, error } = await supabase
        .from('prescription')
        .insert(prescription)
        .select()
        .single();
      
      if (error) {
        console.error('Supabase error:', error);
        
        // Handle specific errors
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
      
      // Return success response with the created data
      return NextResponse.json({ 
        message: "Prescription created successfully", 
        prescription: data 
      }, { status: 201 });
      
    } catch (error) {
      console.error('Failed to create prescription:', error);
      return NextResponse.json({ 
        error: "Failed to create prescription" 
      }, { status: 500 });
    }
  }