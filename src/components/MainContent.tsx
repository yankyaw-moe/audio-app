"use client";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid2,
  IconButton,
  Badge,
} from "@mui/material";
import {
  PlayArrow,
  FavoriteBorder,
  MoreHoriz,
  Search,
  NotificationsNone,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

interface Track {
  idTrack: string;
  strTrack: string;
  strArtist: string;
  intDuration: string;
  strTrackThumb: string;
}

export default function MainContent() {
  const [recentTracks, setRecentTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          "https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888"
        );
        const data = await response.json();
        setRecentTracks(data.track || []);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "rgba(0,0,0,0.04)",
            borderRadius: 2,
            px: 2,
            py: 1,
          }}
        >
          <Search sx={{ color: "text.secondary", mr: 1 }} />
          <input
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "16px",
              width: "200px",
            }}
            placeholder="Search..."
          />
        </Box>
        <IconButton>
          <Badge badgeContent={4} color="error">
            <NotificationsNone />
          </Badge>
        </IconButton>
      </Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6 }}>
          <Card
            sx={{
              bgcolor: "#E91E63",
              color: "white",
              position: "relative",
              borderRadius: 5,
              height: "300px",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.02)",
                "& .playButton": {
                  opacity: 1,
                },
              },
            }}
          >
            <CardContent>
              <Typography variant="h2">GET LOST</Typography>
              <Typography>in your music.</Typography>
              <IconButton
                className="playButton"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  bgcolor: "rgba(255,255,255,0.1)",
                  opacity: 0.7,
                  transition: "opacity 0.2s ease-in-out",
                }}
                color="inherit"
              >
                <PlayArrow />
              </IconButton>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <Card
            sx={{
              bgcolor: "#2196F3",
              color: "white",
              position: "relative",
              borderRadius: 5,
              height: "300px",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.02)",
                "& .playButton": {
                  opacity: 1,
                },
              },
            }}
          >
            <CardContent>
              <Typography variant="h2" component="div">
                MELLOW
              </Typography>
              <Typography>beats.</Typography>
              <IconButton
                className="playButton"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  bgcolor: "rgba(255,255,255,0.1)",
                  opacity: 0.7,
                  transition: "opacity 0.2s ease-in-out",
                }}
                color="inherit"
              >
                <PlayArrow />
              </IconButton>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 6 }}>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Recently Played
          </Typography>
          <Box>
            {recentTracks.map((track, index) => (
              <Box
                key={track.idTrack}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "flex-end",
                  py: 1,
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "grey.300",
                    mr: 2,
                    borderRadius: 1,
                    ackgroundImage: track.strTrackThumb
                      ? `url(${track.strTrackThumb})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1">{track.strTrack}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {track.strArtist}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mx: 2 }}
                >
                  {Math.floor(parseInt(track.intDuration) / 3600)}:
                  {(parseInt(track.intDuration) % 60)
                    .toString()
                    .padStart(2, "0")}
                </Typography>
                <IconButton size="small" sx={{ mr: 1 }}>
                  <FavoriteBorder />
                </IconButton>
                <IconButton size="small">
                  <MoreHoriz />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Recommended For You
          </Typography>
          <Grid2 container spacing={2}>
            {[
              { title: "Best of Blues", artist: "Jazzmaster Bill" },
              { title: "Out of This World", artist: "Lily Wonders" },
              { title: "Acoustics", artist: "The Spaceman" },
            ].map((album, index) => (
              <Grid2 key={index} xs={4}>
                <Box>
                  <Box
                    sx={{
                      width: 150,
                      height: 150,
                      bgcolor: "grey.300",
                      borderRadius: 4,
                      mb: 1,
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "& .playButton": {
                          opacity: 1,
                        },
                        "&::after": {
                          opacity: 1,
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: 4,
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                      },
                    }}
                  >
                    <IconButton
                      className="playButton"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        zIndex: 1,
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      <PlayArrow />
                    </IconButton>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    {album.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {album.artist}
                  </Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
