'use client'
import React, { useState } from "react";

interface TruncatedTextProps {
  text: string;
  maxLength: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const shouldTruncate = text.length > maxLength;

  return (
    <div>
      <p className="text-2xl font-thin leading-8">
        {isTruncated && shouldTruncate
          ? `${text.slice(0, maxLength)}...`
          : text}
      </p>
      {shouldTruncate && (
        <button
          onClick={toggleTruncate}
          className="text-secondary font-thin tracking-wider underline mt-2"
        >
          {isTruncated ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;
