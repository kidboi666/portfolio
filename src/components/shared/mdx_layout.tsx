"use client";

import { motion } from "motion/react";

export function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      className="mx-auto max-w-full items-center justify-center px-4 py-8 md:py-16 lg:w-3xl"
    >
      {children}
    </motion.article>
  );
}
