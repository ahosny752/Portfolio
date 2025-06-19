import { useState } from 'react';
import useSWR from 'swr';

interface swrOptionTypes {
    errorRetryCount: number;
    errorRetryInterval: number;
}

const useRequest = (url: string, swrOptions: swrOptionTypes) => {
    const [isLoading, setIsLoading] = useState(false);
    const baseURL = process.env.REACT_APP_API_URL;

    const getToken = () => {
        const token = localStorage.getItem('FBIdToken');
        return token ? `Bearer ${token}` : '';
    };

    const {
        data: response,
        error,
        isValidating,
        mutate,
    } = useSWR(
        JSON.stringify(url),
        async () => {
            if (url === `${baseURL}/login` || url === `${baseURL}/signup`) {
                return null;
            }
            if (url.includes('undefined')) {
                return null;
            }

            setIsLoading(true);

            const requestOptions = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    Authorization: getToken(),
                },
            };

            try {
                const response = await fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return data;
            } finally {
                setIsLoading(false);
            }
        },
        swrOptions,
    );

    return {
        data: response,
        isLoading,
        isValidating,
        error,
        mutate,
    };
};

export default useRequest;
