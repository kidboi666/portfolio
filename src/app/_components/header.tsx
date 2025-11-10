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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "About Me",
    href: "/about_me",
    icon: CircleQuestionMarkIcon,
    tooltip: "자기소개서",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: BriefcaseBusinessIcon,
    tooltip: "포트폴리오",
  },
  { title: "Resume", href: "/resume", icon: FileUserIcon, tooltip: "이력서" },
];

export function Header({ className }: React.ComponentProps<"header">) {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "flex items-center justify-between rounded-md border border-sidebar-border bg-sidebar/75 px-2 py-2 shadow-xs backdrop-blur-lg",
        className,
      )}
    >
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
          {navItems.map(({ title, href, icon }) => {
            const Icon = icon;
            return (
              <DropdownMenuItem key={title} onClick={() => router.push(href)}>
                <Icon />
                {title}
              </DropdownMenuItem>
            );
          })}
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
    <Tooltip>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger>
            <Button variant="outline" size="icon">
              {mounted ? getThemeIcon(theme) : <ComputerIcon />}
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>
        <TooltipContent>
          <p>테마 변경</p>
        </TooltipContent>
        <DropdownMenuContent align="end">
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
    </Tooltip>
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
      {navItems.map(({ title, href, icon, tooltip }) => {
        const isActive = pathname === href || pathname.includes(href);
        const Icon = icon;
        return (
          <Tooltip key={title}>
            <TooltipTrigger asChild>
              <Button variant={isActive ? "default" : "outline"} asChild>
                <Link href={href}>
                  <Icon />
                  <span>{title}</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
