import { NextResponse } from 'next/server';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';
import { OpenAIEmbeddings } from '@langchain/openai';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { createClient } from '@supabase/supabase-js';
import path from 'path';

function calculateDynamicChunkSize(text: any, numberOfChunks: number) {
    const words = text.split(/\s+/);

    const averageWordsPerChunk = Math.ceil(words.length / numberOfChunks);
    return averageWordsPerChunk;
}

export async function POST(req: Request) {
    try {
        const apiKey = req.headers.get('Authorization');
        if (apiKey !== '1234') {
            throw new Error('Unauthorized: Invalid API key');
        }

        const openAIApiKey = process.env.REACT_APP_API_OPEN_AI_SECRET;
        const privateKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

        if (!privateKey)
            throw new Error('Expected env var SUPABASE_PRIVATE_KEY');
        if (!url) throw new Error('Expected env var SUPABASE_URL');

        const client = createClient(url, privateKey);
        const filePath = path.join('chatbot.txt');

        let docs;
        try {
            const loader = new TextLoader(filePath);
            docs = await loader.load();
        } catch (fileLoadError) {
            console.error('Error loading text file:', fileLoadError);
            return NextResponse.json({ error: 'Error loading text file' });
        }

        let splitDocs;
        const numberOfChunks = 3;
        const dynamicChunkSize = calculateDynamicChunkSize(
            docs[0].pageContent,
            numberOfChunks,
        );
        try {
            const splitter = new RecursiveCharacterTextSplitter({
                chunkSize: dynamicChunkSize,
                chunkOverlap: 0,
                separators: ['\n\n', '\n', ' ', ''],
            });
            splitDocs = await splitter.splitDocuments([docs[0]]);
        } catch (splitterError) {
            console.error('Error splitting documents:', splitterError);
            return NextResponse.json({ error: 'Error splitting documents' });
        }

        let vectorStore;
        try {
            vectorStore = await SupabaseVectorStore.fromDocuments(
                splitDocs,
                new OpenAIEmbeddings({
                    openAIApiKey,
                }),
                {
                    client,
                    tableName: 'documents',
                    queryName: 'match_documents',
                },
            );

            if (!vectorStore) {
                return NextResponse.json({
                    error: 'Error uploading to the vector store',
                });
            }

            return NextResponse.json({
                data: 'File successfully uploaded to the vector store',
            });
        } catch (vectorStoreError) {
            return NextResponse.json({ error: 'Error with the vector store' });
        }
    } catch (err) {
        console.error(err);
        return NextResponse.json({
            error: 'Internal server error',
            errorMsg: (err as Error).message,
        });
    }
}
