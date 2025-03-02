"use client";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Countdown = ({ initial }: { initial: number }) => {
  const [count, setCount] = useState(initial);
  const { replace } = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count <= 0) {
      clearInterval(interval);
      setIsRedirecting(true);
      replace("/");
    }

    return () => clearInterval(interval);
  }, [count, replace]);

  return (
    <div className="flex items-center gap-2">
      {isRedirecting ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <motion.span
          key={count}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-destructive-foreground font-bold"
        >
          {count}
        </motion.span>
      )}
    </div>
  );
};
