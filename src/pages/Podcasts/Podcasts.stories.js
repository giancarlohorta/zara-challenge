import React from "react";
import Podcasts from "./Podcasts";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { episodes } from "../../utils/mock/podcasts";
import { Route, Routes } from "react-router-dom";

export default {
  title: "Pages/Podcasts",
  component: Podcasts,
};

const mock = new MockAdapter(axios, { delayResponse: 0 });

const mockRequest = () => {
  mock.onGet(/lookup?id=/g).reply(200, episodes);
};

mockRequest();

const Template = (args) => (
  <Routes>
    <Route
      path="/podcast/:podcastId/episode/:episodeId"
      element={<Podcasts {...args} />}
    />
  </Routes>
);

export const Default = Template.bind({});

Default.args = {
  changeStatus: () => {},
};
