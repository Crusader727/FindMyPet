import 'whatwg-fetch';
import { stringify } from 'qs';

type MethodType = 'GET' | 'POST' | 'DELETE';

export function request(url: string, qs?: Record<string, string>, body?: any, method?: MethodType) {
    return fetch(url + (qs ? stringify(qs) : ''), {
        method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(body),
    }).then((res) => {
        if (!res.ok) {
            throw new Error();
        }
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return res.json();
        }
        return res.text();
    });
}
