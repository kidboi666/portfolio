"use client";

import { motion } from "motion/react";

export function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      className="px-4 py-4"
    >
      {children}
    </motion.article>
  );
}
