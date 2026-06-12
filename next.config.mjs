/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Clickjacking protection
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
                    // MIME-sniffing protection
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    // Origin isolation
                    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                ],
            },
        ];
    },
};

export default nextConfig;
