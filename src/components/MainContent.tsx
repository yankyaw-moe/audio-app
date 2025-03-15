import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid2,
  IconButton,
} from "@mui/material";
import { PlayArrow, FavoriteBorder, MoreHoriz } from "@mui/icons-material";

export default function MainContent() {
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6 }}>
          <Card
            sx={{
              bgcolor: "#E91E63",
              color: "white",
              position: "relative",
              borderRadius: 5,
              height: "300px",
            }}
          >
            <CardContent>
              <Typography variant="h2">GET LOST</Typography>
              <Typography>in your music.</Typography>
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  bgcolor: "rgba(255,255,255,0.1)",
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
            }}
          >
            <CardContent>
              <Typography variant="h2" component="div">
                MELLOW
              </Typography>
              <Typography>beats.</Typography>
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  bgcolor: "rgba(255,255,255,0.1)",
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
            {[
              {
                title: "All that Jazz",
                artist: "Various Artists",
                duration: "13:30",
              },
              {
                title: "Splashed",
                artist: "Blue-Eyed D...",
                duration: "05:12",
              },
              { title: "Prism", artist: "Gus Bot", duration: "03:22" },
              {
                title: "Mind-blowing Beats",
                artist: "Various Artists",
                duration: "09:10",
              },
            ].map((track, index) => (
              <Box
                key={index}
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
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1">{track.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {track.artist}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mx: 2 }}
                >
                  {track.duration}
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
                    }}
                  />
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
