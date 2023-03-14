import React from "react";
import Home from "./Home";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { podcasts } from "../../utils/mock/podcasts";

export default {
  title: "Pages/Home",
  component: Home,
};

const mock = new MockAdapter(axios, { delayResponse: 0 });

const mockRequest = () => {
  mock.onGet(/toppodcasts/gi).reply(200, podcasts);
};

mockRequest();

const Template = (args) => {
  return <Home {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  changeStatus: () => {},
};
