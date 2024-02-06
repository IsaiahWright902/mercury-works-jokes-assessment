import { Button, Divider, Grid, Stack, useMediaQuery } from "@mui/material";
import { ResponsiveButton, theme } from "../Theme/ThemeRegistry";

export default function GetNewJokesSection({
  handleClick,
}: {
  handleClick: () => void;
}) {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid item xs={12}>
        <Stack
          direction={isMobile ? "column-reverse" : "row"}
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems={isMobile ? "center" : "flex-end"}
          spacing={1}
        >
          <ResponsiveButton
            size="large"
            variant="contained"
            onClick={handleClick}
          >
            Get A New Random Joke
          </ResponsiveButton>
          <Button
            href="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={`secondary`}
          >
            View API Docs
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </>
  );
}
