import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/app/_components/header";
import { cn } from "@/lib/utils";

const lexend = Lexend({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이진욱 | Frontend Developer",
  description: "React, Flutter, Dart, TypeScript, Next.js 개발자 포트폴리오",
  keywords: [
    "프론트엔드",
    "개발자",
    "포트폴리오",
    "React",
    "Flutter",
    "Dart",
    "TypeScript",
    "Next.js",
  ],

  openGraph: {
    title: "이진욱 - Frontend Developer",
    description: "열정적인 프론트엔드 개발자",
    url: "https://portfolio-leejinwook.vercel.app",
    images: ["/images/portfolio/moodlog_cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", lexend.className)}>
        <ThemeProvider attribute="class">
          <main className="mx-auto max-w-full items-center justify-center lg:w-3xl">
            <Header className="sticky top-2 z-50 m-2" />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
