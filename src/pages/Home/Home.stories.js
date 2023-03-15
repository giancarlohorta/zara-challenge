import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { podcasts } from "../../utils/mock/podcasts";
import Home from "./Home";

const mock = new MockAdapter(axios, { delayResponse: 0 });

export default {
  title: "Pages/Home",
  component: Home,
};

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
