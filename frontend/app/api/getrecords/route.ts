// app/api/getrecords/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore =  cookies();
    const supabase = createRouteHandlerClient({
      cookies: () => Promise.resolve(cookieStore),  // Wrap in Promise.resolve()
    });
    
  const { data, error } = await supabase.from('records').select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ records: data }, { status: 200 });
}
