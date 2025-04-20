// app/api/records/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const body = await req.json();

  const { recordid, dateadmit, datedischarge, treatment, doctorid, patientid } = body;

  const { error } = await supabase.from('records').insert({
    recordid,
    dateadmit,
    datedischarge,
    treatment,
    doctorid,
    patientid,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Record inserted successfully' }, { status: 200 });
}
