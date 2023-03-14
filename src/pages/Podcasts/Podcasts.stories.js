import React from "react";
import Podcasts from "./Podcasts";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { episodes } from "../../utils/mock/podcasts";

export default {
  title: "Pages/Podcasts",
  component: Podcasts,
};

const mock = new MockAdapter(axios, { delayResponse: 0 });

const mockRequest = () => {
  mock.onGet(/&media=podcast&/gi).reply(200, episodes);
};

mockRequest();

const Template = (args) => <Podcasts {...args} />;

export const Default = Template.bind({});

Default.args = {
  changeStatus: () => {},
};
