"use client";
import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import {
  PlayArrow,
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
  VolumeUp,
  QueueMusic,
  Computer,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

interface Track {
  idTrack: string;
  strTrack: string;
  strArtist: string;
  intDuration: string;
  strTrackThumb: string;
}

export default function Player() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const response = await fetch(
          "https://www.theaudiodb.com/api/v1/json/2/track.php?h=32793500"
        );
        const data = await response.json();
        if (data.track && data.track[0]) {
          setCurrentTrack(data.track[0]);
        }
      } catch (error) {
        console.error("Error fetching track:", error);
      }
    };

    fetchCurrentTrack();
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "#E91E63",
        color: "white",
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ width: 200 }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            bgcolor: "rgba(0,0,0,0.2)",
            borderRadius: 1,
            backgroundImage: currentTrack?.strTrackThumb
              ? `url(${currentTrack.strTrackThumb})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box>
          <Typography variant="body1">
            {currentTrack?.strTrack || "No Track"}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {currentTrack?.strArtist || "Unknown Artist"}
          </Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton color="inherit" size="small">
          <Shuffle />
        </IconButton>
        <IconButton color="inherit">
          <SkipPrevious />
        </IconButton>
        <IconButton color="inherit" sx={{ bgcolor: "rgba(255,255,255,0.1)" }}>
          <PlayArrow />
        </IconButton>
        <IconButton color="inherit">
          <SkipNext />
        </IconButton>
        <IconButton color="inherit" size="small">
          <Repeat />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ width: 400 }}
      >
        <Typography variant="caption">0:00</Typography>
        <Slider
          size="small"
          sx={{
            color: "white",
            "& .MuiSlider-thumb": {
              width: 12,
              height: 12,
            },
          }}
        />
        <Typography variant="caption">
          {currentTrack
            ? `${Math.floor(parseInt(currentTrack.intDuration) / 3600)}:${(
                parseInt(currentTrack.intDuration) % 60
              )
                .toString()
                .padStart(2, "0")}`
            : "0:00"}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ width: 200 }}
      >
        <IconButton color="inherit" size="small">
          <QueueMusic />
        </IconButton>
        <IconButton color="inherit" size="small">
          <Computer />
        </IconButton>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
          <VolumeUp sx={{ fontSize: 20 }} />
          <Slider size="small" sx={{ color: "white" }} />
        </Stack>
      </Stack>
    </Box>
  );
}
