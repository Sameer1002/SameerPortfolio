/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Disable ESLint during build
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/auth/login',
            }
        ];
    },
};

export default nextConfig;