import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

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
