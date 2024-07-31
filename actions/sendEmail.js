import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { emailTemplate } from "@/utils/emailTemplate";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
});

export const sendEmail = async ({
    email,
    first_name,
    last_name,
    phone_nbr,
    code_postal,
    isDeliveryOption,
    phone,
    model,
    problems
}) => {
    try {
        await transporter.sendMail({
            from: `"I-rep Website" ${process.env.NEXT_PUBLIC_EMAIL_USERNAME}`,
            to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
            subject: "Email From I-rep Website",
            html: emailTemplate({
                email,
                first_name,
                last_name,
                phone_nbr,
                code_postal,
                isDeliveryOption,
                phone,
                model,
                problems
            }),
        });
       
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 500 });
    }
};
