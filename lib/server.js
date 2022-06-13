//https://stackoverflow.com/questions/44342226/next-js-error-only-absolute-urls-are-supported
const dev = process.env.NODE_ENV !== 'production'

//prettier-ignore
export const server = dev ? 'http://localhost:3000/' : 'https://pollito-stuff.vercel.app/';
