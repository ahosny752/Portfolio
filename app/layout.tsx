import ThemeClient from '@/components/ThemeClient';
import { Inter, REM, Fredoka, Vibur } from 'next/font/google';
import '../reset.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

const rem = REM({
    weight: ['400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const fredoka = Fredoka({
    weight: ['400', '500', '600', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

const vibur = Vibur({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'Ahmed Hosny',
    description: "Ahmed Hosny's Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={fredoka.className} lang="en">
            <body>
                <ThemeClient>{children}</ThemeClient>
            </body>
        </html>
    );
}
