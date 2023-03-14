import React from "react";
import { Route, Routes } from "react-router-dom";
import { normalizedEpisodesList } from "../../utils/mock/podcasts";
import Episode from "./Episode";

export default {
  title: "Pages/Episode",
  component: Episode,
};

const Template = (args) => (
  <Routes>
    <Route
      path="/podcast/:podcastId/episode/:episodeId"
      element={<Episode {...args} />}
    />
  </Routes>
);

export const Default = Template.bind({});

Default.args = {
  dataEpisodes: normalizedEpisodesList,
};
