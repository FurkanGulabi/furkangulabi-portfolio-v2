"use client";
import ProfilePicture from "@/public/photo.webp";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Photo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (isLoaded) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      });
    }
  }, [isLoaded, controls]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      className="border-[8px] p-2 origin-bottom border-white border-double shadow-primary shadow-[inner_0_0_10px] rounded-full"
    >
      <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] mx-auto">
        <Image
          src={ProfilePicture} // Resminizin yolu
          alt="My Photo"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          priority
          sizes="100"
          unoptimized
          quality={80}
          className="rounded-full"
          onLoad={handleImageLoad}
        />
      </div>
    </motion.div>
  );
}
