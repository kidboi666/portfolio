"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PlatformToggle } from "@/app/portfolio/_components/platform_toggle";
import { MDXLayout } from "@/components/shared/mdx_layout";
import { ProseWrapper } from "@/components/shared/prose_wrapper";

type PLATFORM = "web" | "flutter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const initialPlatform = pathname.includes("/flutter") ? "flutter" : "web";
  const [platform, setPlatform] = useState<PLATFORM>(initialPlatform);

  const handlePlatformChange = (value: string) => {
    setPlatform(value as PLATFORM);
  };

  useEffect(() => {
    if (platform === "web" && !pathname.includes("/web")) {
      router.push("/portfolio/web");
    } else if (platform === "flutter" && !pathname.includes("/flutter")) {
      router.push("/portfolio/flutter");
    }
  }, [platform, pathname, router]);

  return (
    <MDXLayout>
      <ProseWrapper>
        <PlatformToggle value={platform} onValueChange={handlePlatformChange} />
        {children}
      </ProseWrapper>
    </MDXLayout>
  );
}
