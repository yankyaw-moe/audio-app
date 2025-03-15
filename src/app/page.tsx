"use client";

import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Player from "@/components/Player";

export default function Home() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <MainContent />
      <Player />
    </Box>
  );
}
