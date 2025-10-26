"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { Underbar } from "@/app/_components/underbar";
import { Button } from "@/components/ui/button";
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
      <div className="flex flex-col items-center">
        <h1>안녕하세요.</h1>
        <h2 className="text-center">
          <Underbar>
            {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </Underbar>
        </h2>
      </div>

      <div className="absolute right-0 bottom-40 left-0">
        <div className="flex justify-center gap-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3 },
            }}
          >
            <Button variant="outline" asChild>
              <Link href="/portfolio" className="no-underline">
                포트폴리오 이동
                <ArrowUpRightIcon />
              </Link>
            </Button>
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3 },
            }}
          >
            <Button variant="outline" asChild>
              <Link href="/resume" className="no-underline">
                이력서 이동
                <ArrowUpRightIcon />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
