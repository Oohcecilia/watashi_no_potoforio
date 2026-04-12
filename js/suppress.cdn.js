if (typeof console !== 'undefined' && console.warn) {
    const originalWarn = console.warn;
    console.warn = function (...args) {
        if (args[0] && typeof args[0] === 'string' && args[0].includes('tailwindcss.com')) {
            return; // Suppress Tailwind CDN warning
        }
        originalWarn.apply(console, args);
    };
}