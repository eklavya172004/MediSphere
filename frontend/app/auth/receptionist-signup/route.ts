import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const cookieStore = await cookies();
    const formData = await req.formData();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const phone = formData.get("phone") as string;
    const name = formData.get("name") as string;

    const supabase = createRouteHandlerClient({cookies: () => cookieStore});

    const url = new URL(req.url);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      const userId = data.user?.id;
      if (!userId) {
        return NextResponse.json({ error: "User ID not found" }, { status: 400 });
      }

      const {error:dbError} = await supabase.from("receptionist")
                                            .insert(
                                                [{
                                                    user_id:userId,
                                                    // email,
                                                    // password,
                                                    phone,
                                                    name,
                                                    // role:"receptionist"
                                                }
                                                ]
                                            )

        
    if (dbError) {
        console.error("Error inserting receptionist:", dbError);
        return NextResponse.redirect(url.origin + "/login", { status: 301 });
    }

    return NextResponse.redirect(url.origin+'/login', { status: 301 });

}