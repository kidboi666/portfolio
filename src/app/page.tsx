"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Introduce } from "@/app/_components/introduce";
import { ProseWrapper } from "@/components/shared/prose_wrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[calc(100vh-5rem)] w-full flex-col items-center justify-center"
    >
      <ProseWrapper>
        <Introduce />
        <div className="flex-1" />
        <div className="flex justify-center gap-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
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
              transition: { duration: 0.3, delay: 1 },
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
      </ProseWrapper>
    </motion.div>
  );
}
