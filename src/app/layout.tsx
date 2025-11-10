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
  title: "안녕하세요. 이진욱입니다.",
  description: "안녕하세요 이진욱의 포트폴리오 입니다.",
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
