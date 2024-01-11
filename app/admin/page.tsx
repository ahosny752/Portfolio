import React from 'react';

interface AdminProps {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function Admin({ params, searchParams }: AdminProps) {
    return <div>Hello, </div>;
}
