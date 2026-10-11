/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        // Old static-site URLs. `statusCode: 301` (rather than `permanent: true`,
        // which sends 308) so crawlers see a classic permanent redirect.
        return [
            '/garage-door-repair-services.html',
            '/garage-door-installation-services.html',
            '/garage-door-maintenance-services.html',
        ].map((source) => ({ source, destination: '/', statusCode: 301 }));
    },
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
