import Link from "next/link";
import { H1 } from "@/components/typography/heading";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "about me", href: "/about" },
  { title: "portfolio", href: "/portfolio" },
  { title: "resume", href: "/resume" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full justify-center rounded-md py-4 shadow-lg">
      <div className="mx-auto flex items-center justify-between md:w-md lg:w-lg xl:w-xl 2xl:w-2xl">
        <Button variant="secondary" asChild>
          <Link href="/">
            <H1 className="font-bold text-xl uppercase">lee jin wook</H1>
          </Link>
        </Button>
        <ul className="flex uppercase">
          {navItems.map(({ title, href }) => (
            <li key={title}>
              <Button variant="ghost" asChild>
                <Link href={href}>{title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
