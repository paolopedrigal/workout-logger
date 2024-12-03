import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/session-wrapper";
import ThemeProvider from "@/components/theme-provider";
import TerminalProvider from "@/components/terminal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Git Fit",
  description: "Workout Tracker for Programmers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TerminalProvider>{children}</TerminalProvider>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
