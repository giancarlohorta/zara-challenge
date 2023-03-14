import React from "react";
import { StatusContext } from "../../StatusContext";
import Home from "./Home";

export default {
  title: "Pages/Home",
  component: Home,
};

const Template = (args) => (
  <StatusContext>
    <Home {...args} />
  </StatusContext>
);

export const Default = Template.bind({});

Default.args = {};
