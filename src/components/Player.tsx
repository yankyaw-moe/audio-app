import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import {
  PlayArrow,
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
  VolumeUp,
} from "@mui/icons-material";

export default function Player() {
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
          }}
        />
        <Box>
          <Typography variant="body1">Mind-Blowing</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Various Artists
          </Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
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
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ width: 200 }}
      >
        <VolumeUp />
        <Slider size="small" sx={{ color: "white" }} />
      </Stack>
    </Box>
  );
}
