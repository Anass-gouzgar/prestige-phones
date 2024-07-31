import { NextResponse } from "next/server";

import { sendEmail } from "@/actions/contactUs_sendEmail";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const full_name = formData.get("full_name");
    const entreprise = formData.get("entreprise");
    const email = formData.get("email");
    const phone_nbr = formData.get("phone_nbr");
    const message = formData.get("message");
    
    const response = await sendEmail({
    full_name,
      entreprise,
      email,
      message,
      phone_nbr,

    });

    if (!response.ok) {
      
      return NextResponse.json({ message: "Failed" }, { status: 500 });
    }
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
