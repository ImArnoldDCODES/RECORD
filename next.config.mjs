import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    experimental: {
        appDir: true,
    },
    env: {
        TOKEN: process.env.TOKEN
    }
}

const millionConfig = {
    auto: true
}


export default million.next(nextConfig, millionConfig);