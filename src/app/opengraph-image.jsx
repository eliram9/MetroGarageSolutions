import { ImageResponse } from 'next/og';

export const alt = 'Metro Garage Solutions - Professional Garage Door Services in Rockville MD';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

// Branded social-share card (og:image / twitter:image) — replaces the old
// static photo. Next.js generates the meta tags from this file automatically.
export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#002C8C',
                    backgroundImage: 'linear-gradient(135deg, #002C8C 0%, #0010A4 100%)',
                    color: '#ffffff',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: 6 }}>
                        METRO
                    </div>
                    <div
                        style={{
                            fontSize: 44,
                            fontWeight: 500,
                            letterSpacing: 10,
                            backgroundImage: 'linear-gradient(90deg, #DD6951 0%, #DE2A51 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        GARAGE SOLUTIONS
                    </div>
                </div>

                <div
                    style={{
                        width: 520,
                        height: 6,
                        marginTop: 36,
                        marginBottom: 36,
                        borderRadius: 3,
                        backgroundImage: 'linear-gradient(90deg, #DD6951 0%, #DE2A51 100%)',
                    }}
                />

                <div style={{ fontSize: 32, fontWeight: 400, opacity: 0.95 }}>
                    Garage Door Repair · Installation · Maintenance
                </div>
                <div style={{ fontSize: 28, fontWeight: 400, marginTop: 18, opacity: 0.85 }}>
                    Rockville, MD &amp; the Washington DC Metro Area
                </div>
                <div style={{ fontSize: 36, fontWeight: 600, marginTop: 40 }}>
                    (240) 688-8858
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
