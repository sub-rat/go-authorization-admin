import tailwindcssAnimate from "tailwindcss-animate"

import headlessuiTailwindcss from "@headlessui/tailwindcss"
import { Config } from "tailwindcss"

export const textColors = {
    primary: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    disabled: "var(--text-disabled)",
    onColor: "var(--text-onColor)",
}

export const borderColors = {
    DEFAULT: "var(--border-layout)",
    layout: "var(--border-layout)",
    element: "var(--border-element)",
    ring: "var(--border-ring)",
    active: "var(--border-active)",
}

export const colors = {
    white: "var(--white)",
    black: "var(--black)",

    brand: {
        primary: "var(--brand-primary)",
        secondary: "var(--brand-secondary)",
    },

    surface: {
        background: "var(--surface-background)",
        layout: "var(--surface-layout)",
        muted: "var(--surface-muted)",
        disabled: "var(--surface-disabled)",
        highlight: "var(--surface-highlight)",
    },

    interactive: {
        primary: "var(--interactive-primary)",
        background: "var(--interactive-background)",
        depressed: "var(--interactive-depressed)",
        hover: "var(--interactive-hover)",
    },

    critical: {
        primary: "var(--critical-primary)",
        background: "var(--critical-background)",
        depressed: "var(--critical-depressed)",
        hover: "var(--critical-hover)",
    },

    icon: {
        primary: "var(--icon-primary)",
        secondary: "var(--icon-secondary)",
        disabled: "var(--icon-disabled)",
        onColor: "var(--icon-onColor)",
    },

    warning: {
        primary: "var(--warning-primary)",
        background: "var(--warning-background)",
    },

    info: {
        primary: "var(--info-primary)",
        background: "var(--info-background)",
    },

    success: {
        primary: "var(--success-primary)",
        background: "var(--success-background)",
    },
    divergent_full: {
        "1": "var(--full-divergent-1)",
        "2": "var(--full-divergent-2)",
        "3": "var(--full-divergent-3)",
        "4": "var(--full-divergent-4)",
        "5": "var(--full-divergent-5)",
        "6": "var(--full-divergent-6)",
        "7": "var(--full-divergent-7)",
        "8": "var(--full-divergent-8)",
    },

    divergent: {
        "1": "var(--divergent-1)",
        "2": "var(--divergent-2)",
        "3": "var(--divergent-3)",
        "4": "var(--divergent-4)",
        "5": "var(--divergent-5)",
        "6": "var(--divergent-6)",
        "7": "var(--divergent-7)",
        "8": "var(--divergent-8)",
        neutral: "var(--divergent-neutral)",
    },

    pool: {
        lr1: "var(--pool-lr1)",
        lr2: "var(--pool-lr2)",
        mr: "var(--pool-mr)",
        handy: "var(--pool-handy)",
        ccmr: "var(--pool-ccmr)",
        city: "var(--pool-city)",
        inter: "var(--pool-inter)",
        small: "var(--pool-small)",
        ccha: "var(--pool-ccha)",
    },

    chart: {
        "1": "var(--chart-1)",
        "2": "var(--chart-2)",
        "3": "var(--chart-3)",
        "4": "var(--chart-4)",
        "5": "var(--chart-5)",
        "6": "var(--chart-6)",
        "7": "var(--chart-7)",
        "8": "var(--chart-8)",
    },
}

export const base: Config = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                ...colors,
                text: textColors,
                border: borderColors,
                tremor: {
                    brand: {
                        faint: "#eff6ff", // blue-50
                        muted: "#bfdbfe", // blue-200
                        subtle: "#60a5fa", // blue-400
                        DEFAULT: "#3b82f6", // blue-500
                        emphasis: "#1d4ed8", // blue-700
                        inverted: "#ffffff", // white
                    },
                    background: {
                        muted: "#f9fafb", // gray-50
                        subtle: "#f3f4f6", // gray-100
                        DEFAULT: "#ffffff", // white
                        emphasis: "#374151", // gray-700
                    },
                    border: {
                        DEFAULT: "#e5e7eb", // gray-200
                    },
                    ring: {
                        DEFAULT: "#e5e7eb", // gray-200
                    },
                    content: {
                        subtle: "#9ca3af", // gray-400
                        DEFAULT: "#6b7280", // gray-500
                        emphasis: "#374151", // gray-700
                        strong: "#111827", // gray-900
                        inverted: "#ffffff", // white
                    },
                },
                // dark mode
                "dark-tremor": {
                    brand: {
                        faint: "#0B1229", // custom
                        muted: "#172554", // blue-950
                        subtle: "#1e40af", // blue-800
                        DEFAULT: "#3b82f6", // blue-500
                        emphasis: "#60a5fa", // blue-400
                        inverted: "#030712", // gray-950
                    },
                    background: {
                        muted: "#131A2B", // custom
                        subtle: "#1f2937", // gray-800
                        DEFAULT: "#111827", // gray-900
                        emphasis: "#d1d5db", // gray-300
                    },
                    border: {
                        DEFAULT: "#1f2937", // gray-800
                    },
                    ring: {
                        DEFAULT: "#1f2937", // gray-800
                    },
                    content: {
                        subtle: "#4b5563", // gray-600
                        DEFAULT: "#6b7280", // gray-600
                        emphasis: "#e5e7eb", // gray-200
                        strong: "#f9fafb", // gray-50
                        inverted: "#000000", // black
                    },
                },
            },
            boxShadow: {
                // light
                "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "tremor-card":
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                "tremor-dropdown":
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                "shadow-sm": "0px 1.445px 2.891px 0px rgba(0, 0, 0, 0.05)",
                shadow:
                    "0px 1.445px 2.891px 0px rgba(0, 0, 0, 0.06), 0px 1.445px 4.336px 0px rgba(0, 0, 0, 0.10)",
                "shadow-md":
                    "0px 2.891px 5.781px -1.445px rgba(0, 0, 0, 0.06), 0px 5.781px 8.672px -1.445px rgba(0, 0, 0, 0.10)",
                "shadow-lg":
                    "0px 5.781px 8.672px -2.891px rgba(0, 0, 0, 0.05), 0px 14.453px 21.68px -4.336px rgba(0, 0, 0, 0.10)",
                "shadow-xl":
                    "0px 14.453px 14.453px -7.227px rgba(0, 0, 0, 0.04), 0px 28.906px 36.133px -7.227px rgba(0, 0, 0, 0.10)",
                "shadow-2xl": "0px 36.133px 72.266px -17.344px rgba(0, 0, 0, 0.25)",
                "shadow-": "0px 2.891px 5.781px 0px rgba(0, 0, 0, 0.06) inset",
                // dark
                "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "dark-tremor-card":
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                "dark-tremor-dropdown":
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            },
            borderRadius: {
                "tremor-small": "0.375rem",
                "tremor-default": "0.5rem",
                "tremor-full": "9999px",
                base: "4px",
                none: "0px",
                sm: "2px",
                lg: "8px",
                "2xl": "16px",
                full: "9999px",
            },
            fontSize: {
                base: "14px",
                "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
                "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
                "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
                "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
                label: "10px",
                xs: "12px",
                sm: "13px",
                md: "15px",
                lg: "16px",
                xl: "20px",
                "2xl": "24px",
                "3xl": "32px",
            },
            textColor: {
                ...textColors,
                ...colors,
            },
            borderColor: {
                ...borderColors,
                ...colors,
            },
            keyframes: {
                slideUpAndFade: {
                    from: { opacity: "0", transform: "translateY(2px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideRightAndFade: {
                    from: { opacity: "0", transform: "translateX(-2px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slideDownAndFade: {
                    from: { opacity: "0", transform: "translateY(-2px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideLeftAndFade: {
                    from: { opacity: "0", transform: "translateX(2px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            padding: {
                s8: "8px",
                s16: "16px",
            },
            animation: {
                slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideRightAndFade:
                    "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideDownAndFade:
                    "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideLeftAndFade:
                    "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    // eslint-disable-next-line global-require
    plugins: [tailwindcssAnimate, headlessuiTailwindcss],
}

export default base
