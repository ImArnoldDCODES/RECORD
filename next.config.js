/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    experimental: {
        appDir: true,
    },
    env: {
        TOKEN: process.env.TOKEN
    }
}

module.exports = nextConfig
