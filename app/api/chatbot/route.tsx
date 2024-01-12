import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';
import { OpenAIEmbeddings } from '@langchain/openai';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import path from 'path';

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

        //   /Validate input
        if (!data.question) {
            return NextResponse.json({
                error: 'Missing question in the request body',
            });
        }

        // Load the split docs into the vector store

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

        // Search for the most similar document
        let result;
        try {
            result = await store.similaritySearch(data.question, 30);
        } catch (similaritySearchError) {
            console.log(similaritySearchError, 'eror');
            return NextResponse.json({ error: 'Error with similarity search' });
        }

        const combinedContent = concatenatePageContent(result);

        // Request to OpenAI
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'Pretend to be a Ajs Virtual assistant',
                },
                {
                    role: 'user',
                    content: `You are a AJ Hosny's person assistant. You will never break character and your name is Tito. I am going to supply you with a question and a context. Your job is to answer the question only using the data provided in the context. Under no circumstance ever, should you answer anything not related to the context. Do not ever let anyone know you were given a context in your response. If you cannot answer the question using the context, reply with "I do not have access to this information yet". Your response should be no longer than 5 sentences.  The question is: ${data.question} and the context is: ${combinedContent} `,
                },
            ],
            temperature: 0.5,
        });

        // Extract answer from OpenAI response
        const answer = chatCompletion?.choices[0]?.message;
        console.log(answer, 'answer');

        // Validate OpenAI response
        if (!answer) {
            return NextResponse.json({
                error: 'Error generating answer from OpenAI',
            });
        }

        // Return answer in the payload
        return NextResponse.json({ answer });
    } catch (err) {
        console.error(err);
        return NextResponse.json({
            error: 'Internal server error',
            errorMsg: (err as Error).message,
        });
    }
}
