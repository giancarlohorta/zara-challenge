import React from "react";
import ItemList from "./ItemList";
import { normalizedPodcastsList } from "../../utils/mock/podcasts";

export default {
  title: "Components/ItemList",
  component: ItemList,
};

const Template = (args) => <ItemList {...args} />;

export const Default = Template.bind({});

Default.args = {
  list: normalizedPodcastsList,
};
