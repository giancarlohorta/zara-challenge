import React from "react";
import Item from "./Item";
import { normalizedPodcast } from "../../utils/mock/podcasts";

export default {
  title: "Components/Item",
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...normalizedPodcast,
};
export const WithDescription = Template.bind({});

WithDescription.args = {
  ...normalizedPodcast,
  internalPage: true,
};
