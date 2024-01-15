import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const apiKey = process.env.REACT_APP_API_KEY;

        if (!apiKey) throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);

        const privateKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (!privateKey)
            throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);

        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        if (!url) throw new Error(`Expected env var SUPABASE_URL`);

        const transport = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,

            auth: {
                user: process.env.NEXT_PUBLIC_NODE_MAILER_EMAIL,
                pass: process.env.NEXT_PUBLIC_NODE_MAILER_PASSWORD,
            },
        });

        const mailOptions: Mail.Options = {
            from: process.env.NEXT_PUBLIC_NODE_MAILER_EMAIL,
            to: process.env.NEXT_PUBLIC_NODE_MAILER_EMAIL,
            subject: `Message from ${body.name} (${body.email})`,
            text: `Name: ${body.name} Company: ${body.company} Email: ${body.email} Phone: ${body.phone} message: ${body.message}`,
        };
        const supabase = createClient(url, privateKey);

        await supabase.from('clientform').insert([
            {
                name: body.name,
                company: body.company,
                email: body.email,
                phone: body.phone,
                message: body.message,
            },
        ]);

        await transport.sendMail(mailOptions);

        return NextResponse.json({
            data: true,
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({
            error: 'Internal server error',
            errorMsg: (err as Error).message,
        });
    }
}
