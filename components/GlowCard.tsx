"use client";

import Image from "next/image";
import { Assets } from "@/data/assets";

interface Testimonial {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

interface GlowCardProps {
  card: Testimonial;
  index: number;
  children: React.ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ card, children }) => {
  return (
    <div className="group relative z-40 overflow-hidden rounded-xl p-10 mb-5 bg-gray-900/50 border border-transparent transition duration-500">
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            src={Assets.star}
            alt="star"
            width={20}
            height={20}
            className="size-5"
          />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-gray-300 text-xs mb-4 leading-relaxed font-text">
          {card.review}
        </p>
      </div>

      {children}
    </div>
  );
};

export default GlowCard;
