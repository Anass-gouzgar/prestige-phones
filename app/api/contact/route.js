import { NextResponse } from "next/server";

import { sendEmail } from "@/actions/sendEmail";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const first_name = formData.get("first_name");
        const last_name = formData.get("last_name");
        const email = formData.get("email");
        const phone_nbr = formData.get("phone_nbr");
        const code_postal = formData.get("code_postal");
        const isDeliveryOption = formData.get("isDeliveryOption");
       
        const phone = formData.get("phone");
        const model = formData.get("model");
        const problems = [];
        for (const [key, value] of formData.entries()) {
            if (key.startsWith('problems[') && key.endsWith(']')) {
                problems.push(value);
            }
        }

        const response = await sendEmail({
            first_name,
            last_name,
            email,
            last_name,
            phone_nbr,
            code_postal,
            isDeliveryOption,
            phone,
            model,
            problems
        });

        if (!response.ok) {
            return NextResponse.json({ message: "Failed" }, { status: 500 });
        }
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 500 });
    }
}
