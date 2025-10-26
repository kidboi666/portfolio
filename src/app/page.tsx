"use client";

import { motion } from "motion/react";
import { Introduce } from "@/app/_components/introduce";
import { ProseWrapper } from "@/components/shared/prose_wrapper";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-col items-center justify-center"
    >
      <ProseWrapper>
        <Introduce className="mt-20" />
      </ProseWrapper>
    </motion.main>
  );
}
