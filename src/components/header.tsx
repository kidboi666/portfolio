"use client";

import {
  BriefcaseBusinessIcon,
  CircleQuestionMarkIcon,
  FileUserIcon,
  HomeIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { title: "About Me", href: "/about_me", icon: <CircleQuestionMarkIcon /> },
  { title: "Portfolio", href: "/portfolio", icon: <BriefcaseBusinessIcon /> },
  { title: "Resume", href: "/resume", icon: <FileUserIcon /> },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-2 z-50 mx-2 items-center justify-center rounded-md border bg-background px-2 py-2 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <HomeIcon />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <ul className="flex gap-2">
          {navItems.map(({ title, href, icon }) => {
            const isActive = pathname === href;
            return (
              <li key={title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={isActive ? "default" : "outline"}
                      size="icon"
                      asChild
                    >
                      <Link href={href}>{icon}</Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
