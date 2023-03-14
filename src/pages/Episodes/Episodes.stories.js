import React from "react";
import { normalizedEpisodesList } from "../../utils/mock/podcasts";
import Episodes from "./Episodes";

export default {
  title: "Pages/Episodes",
  component: Episodes,
};

const Template = (args) => <Episodes {...args} />;

export const Default = Template.bind({});

Default.args = {
  podcastId: 1460157002,
  dataEpisodes: normalizedEpisodesList,
};
