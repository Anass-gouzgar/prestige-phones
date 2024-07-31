import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { emailTemplate } from "@/utils/contactUs_emailTemplate";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export const sendEmail = async ({
  email,
  full_name,
  entreprise,
  phone_nbr,
  message
}) => {
  try {
    await transporter.sendMail({
      from: `"Prestige Phone Website" ${process.env.NEXT_PUBLIC_EMAIL_USERNAME}`,
      to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
      subject: "Email From Prestige Phone Website",
      html: emailTemplate({
        email,
        full_name,
        message,
        entreprise,
        phone_nbr,
      }),
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
};
