import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";

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
      <body className={`${lexend.className} antialiased`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
