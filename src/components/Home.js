import React from "react";
import Profile from "./Profile";
import Repo from "./Repo";
import ErrorBoundary from "../ErrorBoundary";

function Home() {
  return (
    <>
      <ErrorBoundary>
        <Profile dynamicClassName="profile-container" />
        <Repo />
      </ErrorBoundary>
    </>
  );
}

export default Home;
