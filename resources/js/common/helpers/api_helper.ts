import { baseUrlApi } from '@/common/constant/url';
import axios from 'axios';

export const ApiHelpers = {
    get: async ({
        url,
        params,
        onSuccess,
        onError,
        headers,
    }: {
        url: string;
        params?: any;
        onSuccess: (response: any) => void;
        onError: (error: any) => void;
        headers?: any;
    }) => {
        try {
            const fullUrl = `${baseUrlApi}${url}`;
            const res = await axios.get(fullUrl, {
                headers: { ...headers, ...ApiHelpers.bearerToken() },
                params,
            });
            console.log('GET request success', res);
            onSuccess(res);
        } catch (error) {
            console.log('GET request failed', error);
            onError(error);
        }
    },
    post: async ({
        header,
        url,
        data,
        onSuccess,
        onError,
    }: {
        header?: any;
        url: string;
        data?: any;
        onSuccess: (response: any) => void;
        onError: (error: any) => void;
        headers?: any;
    }) => {
        try {
            const headers = { ...header, ...ApiHelpers.bearerToken() };
            const fullUrl = `${baseUrlApi}${url}`;
            const res = await axios.post(fullUrl, data, { headers });
            console.log('POST request success', res);
            onSuccess(res);
        } catch (error) {
            console.log('POST request failed', error);
            onError(error);
        }
    },
    put: async ({
        header,
        url,
        data,
        onSuccess,
        onError,
    }: {
        header?: any;
        url: string;
        data?: any;
        onSuccess: (response: any) => void;
        onError: (error: any) => void;
        headers?: any;
    }) => {
        try {
            const headers = { ...header, ...ApiHelpers.bearerToken() };
            const fullUrl = `${baseUrlApi}${url}`;
            const res = await axios.put(fullUrl, data, { headers });
            console.log('PUT request success', res);
            onSuccess(res);
        } catch (error) {
            console.log('PUT request failed', error);
            onError(error);
        }
    },
    delete: async ({
        header,
        url,
        onSuccess,
        onError,
    }: {
        header?: any;
        url: string;
        onSuccess: (response: any) => void;
        onError: (error: any) => void;
        headers?: any;
    }) => {
        try {
            const headers = { ...header, ...ApiHelpers.bearerToken() };
            const fullUrl = `${baseUrlApi}${url}`;
            const res = await axios.delete(fullUrl, { headers });
            console.log('DELETE request success', res);
            onSuccess(res);
        } catch (error) {
            console.log('DELETE request failed', error);
            onError(error);
        }
    },
    patch: async ({
        header,
        url,
        data,
        onSuccess,
        onError,
    }: {
        header?: any;
        url: string;
        data?: any;
        onSuccess: (response: any) => void;
        onError: (error: any) => void;
        headers?: any;
    }) => {
        try {
            const headers = { ...header, ...ApiHelpers.bearerToken() };
            const fullUrl = `${baseUrlApi}${url}`;
            const res = await axios.patch(fullUrl, data, { headers });
            console.log('PATCH request success', res);
            onSuccess(res);
        } catch (error) {
            console.log('PATCH request failed', error);
            onError(error);
        }
    },

    bearerToken: () => {
        const token = localStorage.getItem('token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    },
};
