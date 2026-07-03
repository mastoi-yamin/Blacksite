import type { Metadata } from "next";
import type { ReactNode } from "react";

import { appConfig } from "@/config/app";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: appConfig.name,
    description: appConfig.description,
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({
    children,
}: RootLayoutProps) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}