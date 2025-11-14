"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function TransitionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-in">{children}</div>
    // <motion.article
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1, transition: { duration: 0.3 } }}
    // >
    //   {children}
    // </motion.article>
  );
}
