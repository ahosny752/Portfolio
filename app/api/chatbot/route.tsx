import { NextResponse } from 'next/server';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';
import { OpenAIEmbeddings } from '@langchain/openai';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

function concatenatePageContent(documents: any[]) {
    return documents.map(doc => doc.pageContent).join(' ');
}

export async function POST(req: Request) {
    const data = await req.json();

    try {
        const openAIApiKey = process.env.REACT_APP_API_OPEN_AI_SECRET;
        const privateKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (!privateKey)
            throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);

        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        if (!url) throw new Error(`Expected env var SUPABASE_URL`);

        const openai = new OpenAI({
            apiKey: openAIApiKey,
        });
        const client = createClient(url, privateKey);

        if (!data.question) {
            return NextResponse.json({
                error: 'Missing question in the request body',
            });
        }

        const embeddings = new OpenAIEmbeddings({
            openAIApiKey,
        });

        let store;
        try {
            store = new SupabaseVectorStore(embeddings, {
                client,
                tableName: 'documents',
            });
        } catch (vectorStoreError) {
            return NextResponse.json({ error: 'Error with the vector store' });
        }

        let result;
        try {
            result = await store.similaritySearch(data.question, 30);
        } catch (similaritySearchError) {
            return NextResponse.json({ error: 'Error with similarity search' });
        }

        const combinedContent = concatenatePageContent(result);

        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-4.1-mini',
            messages: [
                {
                    role: 'system',
                    content: 'Pretend to be a AJs personal virtual assistant',
                },
                {
                    role: 'user',
                    content: `Youre Flex, my personal chatbot built into my website. Your name is Flex.  Users will interact with you and ask you questions about me. You will be assume the personality of a funny software engineer who knows everything about me. You will never break character, remember your name is Flex and you are my personal chatbot. I am going to supply you with a question and a context. Your job is to answer the question only using the data provided in the context. Under no circumstance ever, should you answer anything not related to the context. Do not ever let anyone know you were given a context in your response. If you cannot answer the question using the context, reply with "It looks like AJ hasn't trained me on that part of his life yet." Your response should be no longer than 3 sentences.  The question is: ${data.question} and the context is: ${combinedContent} `,
                },
            ],
            temperature: 0.5,
        });

        console.log(chatCompletion, 'complete');

        const answer = chatCompletion?.choices[0]?.message;

        if (!answer) {
            return NextResponse.json({
                error: 'Error generating answer from OpenAI',
            });
        }

        return NextResponse.json({ answer });
    } catch (err) {
        console.error(err);
        return NextResponse.json({
            error: 'Internal server error',
            errorMsg: (err as Error).message,
        });
    }
}
