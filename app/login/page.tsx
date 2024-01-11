import Link from 'next/link';
import { cookies, headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default function Login({
    searchParams,
}: {
    searchParams: { message: string };
}) {
    const signIn = async (formData: FormData) => {
        'use server';

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect('/login?message=Could not authenticate user');
        }

        return redirect('/');
    };

    const signUp = async (formData: FormData) => {
        'use server';

        const origin = headers().get('origin');
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        if (error) {
            console.log(error, 'error');
            return redirect('/login?message=Could not authenticate user');
        }

        return redirect(
            '/login?message=Check email to continue sign in process',
        );
    };

    return <div>LOGIN</div>;
}