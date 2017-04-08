const createShortcut = method => ({ options = {}, ...rest} = {}) => ({
    ...rest,
    options: { method, ...options }
});

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
export const GET = createShortcut('GET');
export const HEAD = createShortcut('HEAD');
export const POST = createShortcut('POST');
export const PUT = createShortcut('PUT');
export const DELETE = createShortcut('DELETE');
export const CONNECT = createShortcut('CONNECT');
export const OPTIONS = createShortcut('OPTIONS');
export const TRACE = createShortcut('TRACE');
export const PATCH = createShortcut('PATCH');
