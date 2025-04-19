import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {

    const cookiesStore = await cookies();
    const supabase = createRouteHandlerClient({cookies: () => cookiesStore});
    
    const {
        data:{user},
        error:useError
    } = await supabase.auth.getUser();

    if (useError || !user) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
      }

      const { data: doctor, error } = await supabase
      .from('doctor')
      .select('*')
      .eq('user_id', user.id) 
      .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ doctor });
}

