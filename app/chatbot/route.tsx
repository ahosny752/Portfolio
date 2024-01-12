import { NextResponse } from 'next/server';

// interface TokenPayload {
//     body: {
//         test: string;
//     };
// }
export async function POST(req: Request) {
    try {
        // const { body } = req as { body: TokenPayload };

        return NextResponse.json({ message: 'Hello, World!' });
    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' });
    }
}
