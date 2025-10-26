"use client";

import type { ComponentProps } from "react";
import { Underbar } from "@/app/_components/underbar";
import { useTypingEffect } from "@/hooks/use_typing_effect";
import { cn } from "@/lib/utils";

const TEXT_CONTENTS = [
  "끊임없는 호기심으로 성장을 이어가는",
  "개발자 이진욱 입니다.",
];

export const Introduce = ({ className }: ComponentProps<"div">) => {
  const text = useTypingEffect(TEXT_CONTENTS);

  return (
    <div className={cn(className)}>
      <div className="flex h-80 flex-col items-center">
        <h1>안녕하세요.</h1>
        <h2 className="text-center">
          <Underbar>
            {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </Underbar>
        </h2>
      </div>
    </div>
  );
};
