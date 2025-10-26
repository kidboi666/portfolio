"use client";

import {
  BriefcaseBusinessIcon,
  CircleQuestionMarkIcon,
  ComputerIcon,
  EllipsisVerticalIcon,
  FileUserIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "About Me", href: "/about_me", icon: <CircleQuestionMarkIcon /> },
  { title: "Portfolio", href: "/portfolio", icon: <BriefcaseBusinessIcon /> },
  { title: "Resume", href: "/resume", icon: <FileUserIcon /> },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-2 z-50 mx-2 items-center justify-center rounded-md border border-sidebar-border bg-sidebar-accent/75 px-2 py-2 shadow-xs backdrop-blur-lg">
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
        <div className="flex gap-2">
          <DarkModeToggleButton />
          <CollapsibleContent className="md:hidden" />
          <NavSection pathname={pathname} className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
}

function CollapsibleContent({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <EllipsisVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {navItems.map(({ title, href, icon }) => (
            <DropdownMenuItem key={title} onClick={() => router.push(href)}>
              {icon}
              {title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function getThemeIcon(currentTheme?: string) {
    switch (currentTheme) {
      case "dark":
        return <MoonIcon />;
      case "light":
        return <SunIcon />;
      default:
        return <ComputerIcon />;
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {mounted ? getThemeIcon(theme) : <ComputerIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>테마</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="dark">
            <MoonIcon />
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light">
            <SunIcon />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <ComputerIcon />
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavSection({
  pathname,
  className,
}: {
  pathname: string;
  className?: string;
}) {
  return (
    <div className={cn("gap-2", className)}>
      {navItems.map(({ title, href, icon }) => {
        const isActive = pathname === href;
        return (
          <Tooltip key={title}>
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
        );
      })}
    </div>
  );
}
