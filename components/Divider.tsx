"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Divider = () => {
  return (
    <>
      <div className="flex w-full flex-col lg:flex-row">
        <motion.div
          whileHover={{ scale: 1.025 }}
          className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center"
        >
          <Link href="/personal">Personal Inquiry</Link>
        </motion.div>
        <div className="divider lg:divider-horizontal">
          OR
        </div>
        <motion.div
          whileHover={{ scale: 1.025 }}
          className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center"
        >
          <Link href="/professional">
            Professional Inquiry
          </Link>
        </motion.div>
      </div>
    </>
  );
};

// For person inquiry: library, book reviews, essays, advice i'd tell myself,
// my story, favorite games. life philosophy, role models, who am i made out of. mbti, jung

// professional: projects, documentations, resume, work experience.

export default Divider;
