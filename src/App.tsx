import { Grid } from "@mui/material";
import { useCurrentJoke } from "./fetchers/jokeFetcher";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import GetNewJokesSection from "./components/GetNewJokesSection/GetNewJokesSection";
import JokeSection from "./components/JokeSection/JokeSection";
import PunchlineSection from "./components/PunchlineSection/PunchlineSection";
import { useState } from "react";
import ShowPunchlineButton from "./components/PunchlineSection/ShowPunchlineButton";
import ErrorLoadingJoke from "./components/ErrorLoadingJoke/ErrorLoadingJoke";

export default function App() {
  const { currentJoke, currentJokeLoading, mutateCurrentJoke } =
    useCurrentJoke();
  const [showPunchline, setShowPunchline] = useState<boolean>(false);

  const handleGetNewJoke = () => {
    mutateCurrentJoke();
    setShowPunchline(false);
  };

  return (
    <>
      <Grid container spacing={4}>
        <GetNewJokesSection handleClick={handleGetNewJoke} />
      </Grid>
      {currentJokeLoading ? (
        <LoadingSpinner />
      ) : currentJoke ? (
        <Grid container paddingTop={5} spacing={10}>
          <JokeSection joke={currentJoke?.joke} />
          <ShowPunchlineButton
            showPunchline={showPunchline}
            setShowPunchline={setShowPunchline}
          />
          <PunchlineSection
            punchline={currentJoke?.punchLine}
            showPunchline={showPunchline}
          />
        </Grid>
      ) : (
        <ErrorLoadingJoke />
      )}
    </>
  );
}
