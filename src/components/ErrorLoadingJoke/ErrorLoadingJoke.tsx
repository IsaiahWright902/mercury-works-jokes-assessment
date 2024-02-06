import { Grid, Stack, Typography } from "@mui/material";

export default function ErrorLoadingJoke() {
  return (
    <Grid container mt={10}>
      <Grid item xs={12}>
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" color={`error`}>
            There was an error loading your joke.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
