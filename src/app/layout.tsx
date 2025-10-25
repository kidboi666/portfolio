import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/_components/header";
import { Theme } from "./_components/theme";

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
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <Header />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
