import { Grid, Stack, Typography, CircularProgress } from "@mui/material";

export default function LoadingSpinner() {
  return (
    <Grid item xs={12}>
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <CircularProgress />
        <Typography sx={{ textTransform: "uppercase" }}>
          Loading Your Joke
        </Typography>
      </Stack>
    </Grid>
  );
}
