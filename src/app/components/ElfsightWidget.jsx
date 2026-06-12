'use client';

import { useEffect, useRef, useState } from 'react';

// Renders an Elfsight widget but only loads the (heavy) platform.js script
// when the widget actually scrolls near the viewport. Keeping it out of the
// initial page load is worth ~1s of main-thread blocking time on mobile.
const ElfsightWidget = ({ appClass, className = '' }) => {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '400px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        if (!document.querySelector('script[src^="https://static.elfsight.com/platform"]')) {
            const script = document.createElement('script');
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [visible]);

    return (
        <div ref={containerRef} className={className}>
            {visible && <div className={appClass} data-elfsight-app-lazy></div>}
        </div>
    );
};

export default ElfsightWidget;
