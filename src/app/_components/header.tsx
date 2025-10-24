"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { H1 } from "@/components/typography/heading";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "about me", href: "/about_me" },
  { title: "portfolio", href: "/portfolio" },
  { title: "resume", href: "/resume" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full justify-center rounded-md bg-background py-4 shadow-lg">
      <div className="mx-auto flex items-center justify-between md:w-md lg:w-lg xl:w-xl 2xl:w-2xl">
        <Button variant="secondary" asChild>
          <Link href="/">
            <H1 className="font-bold text-xl uppercase">lee jin wook</H1>
          </Link>
        </Button>
        <ul className="flex uppercase">
          {navItems.map(({ title, href }) => {
            const isActive = pathname === href;
            return (
              <li key={title}>
                <Button variant={isActive ? "default" : "ghost"} asChild>
                  <Link href={href}>{title}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
