import { Grid, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ResponsiveButton } from "../Theme/ThemeRegistry";

export default function ShowPunchlineButton({
  showPunchline,
  setShowPunchline,
}: {
  showPunchline: boolean;
  setShowPunchline: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Grid item xs={12}>
      <Stack alignItems="center" justifyContent="center">
        <ResponsiveButton
          size="large"
          variant="contained"
          color={`secondary`}
          onClick={() => setShowPunchline(!showPunchline)}
        >
          {showPunchline ? "Hide" : "Show"} Punchline
        </ResponsiveButton>
      </Stack>
    </Grid>
  );
}
