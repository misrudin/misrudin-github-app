/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/root.ts/:slug*',
                destination: process.env.REST_API_URL + ':slug*',
            },
        ]
    },
}

module.exports = nextConfig
