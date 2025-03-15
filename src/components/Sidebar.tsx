import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import {
  Home,
  QueueMusic,
  PlaylistPlay,
  Favorite,
  ShowChart,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: "#f3f1f0",
        height: "100vh",
        padding: 2,
        borderRight: "1px solid #eaeaea",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Avatar sx={{ mr: 2 }}>J</Avatar>
        <Typography sx={{ color: "black", fontWeight: "bold" }}>
          Joshua
        </Typography>
      </Box>

      <Typography
        variant="overline"
        sx={{ px: 2, color: "gray", fontWeight: "bold" }}
      >
        BROWSE
      </Typography>
      <List>
        {[
          { text: "Home", icon: <Home /> },
          { text: "Songs", icon: <QueueMusic /> },
          { text: "Playlists", icon: <PlaylistPlay /> },
          { text: "Just for You", icon: <Favorite /> },
          { text: "Top Charts", icon: <ShowChart /> },
        ].map((item) => (
          <ListItem key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ color: "gray", fontWeight: "bold" }}
            />
          </ListItem>
        ))}
      </List>

      <Typography
        variant="overline"
        sx={{ px: 2, mt: 4, color: "gray", fontWeight: "bold" }}
      >
        YOUR PLAYLISTS
      </Typography>
      <List>
        {[
          "Workout Mix",
          "Chillin' at Home",
          "Booping at Adobe",
          "XD 4 Life",
        ].map((text) => (
          <ListItem key={text}>
            <ListItemIcon>
              <PlaylistPlay />
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{ color: "gray", fontWeight: "bold" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
