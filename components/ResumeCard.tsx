"use client";
import { Viewer } from "@react-pdf-viewer/core";
import { useState } from "react";

const ResumeCard = ({ src }: { src: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`cursor-pointer transition-all duration-300 rounded-xl shadow-md overflow-hidden border border-base-200 ${
        expanded
          ? "w-full h-[90vh] col-span-3"
          : "w-64 h-96"
      }`}
    >
      <Viewer fileUrl={src} />
    </div>
  );
};

export default ResumeCard;
