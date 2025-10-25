"use client";

import type { PropsWithChildren } from "react";
import { useSystemTheme } from "@/hooks/use_system_theme";

export function Theme({ children }: PropsWithChildren) {
  useSystemTheme();
  return <>{children}</>;
}
