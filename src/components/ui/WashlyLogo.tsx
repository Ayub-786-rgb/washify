
import React from 'react';

// Washly Logo: Modern, premium, blue/white, scalable SVG
export default function WashlyLogo({ className = '', size = 48 }: { className?: string; size?: number }) {
return (
<svg
width={size}
height={size}
viewBox="0 0 48 48"
fill="none"
xmlns="http://www.w3.org/2000/svg"
className={className}
>
<circle cx="24" cy="24" r="22" fill="#2563EB" stroke="#fff" strokeWidth="2" />
<path
d="M14 30c0-6 8-10 10-10s10 4 10 10c0 4-3 7-7 7s-7-3-7-7z"
fill="#fff"
stroke="#2563EB"
strokeWidth="2"
/>
<ellipse cx="24" cy="24" rx="5" ry="2" fill="#93C5FD" />
<circle cx="18" cy="20" r="1.5" fill="#fff" />
<circle cx="30" cy="20" r="1.5" fill="#fff" />
<circle cx="20" cy="28" r="0.8" fill="#2563EB" />
<text x="24" y="44" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="10" fill="#fff">Washly</text>
</svg>
);
}