import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../Theme/ThemeRegistry";

export default function JokeSection({ joke }: { joke: string | undefined }) {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!joke) {
    return null;
  }

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <img
          style={{
            position: "absolute",
            width: "150px",
            left: "5%",
            top: 0,
            zIndex: 0,
            opacity: 0.15,
          }}
          alt="quote icon"
          src="data:image/png;base64,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"
        />
        <Typography
          sx={{
            paddingLeft: isMobile ? "15px" : "100px",
            paddingTop: "50px",
            zIndex: 10,
            position: "relative",
          }}
          variant="h3"
          textAlign="left"
        >
          {joke}
        </Typography>
      </Box>
    </Grid>
  );
}
