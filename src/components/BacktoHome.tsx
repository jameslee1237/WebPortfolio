"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import HomeIcon from "@mui/icons-material/Home";

const BackToHomeButton = () => {
  const router = useRouter();

  return (
    <button
      className="back-to-home-button flex items-center gap-2"
      onClick={() => router.push('/')}
    >
      <HomeIcon style={{ fontSize: 16 }} />
      Home
    </button>
  );
};

export default BackToHomeButton;