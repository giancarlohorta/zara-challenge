import React from "react";
import SearchInput from "./SearchInput";

export default {
  title: "Components/SearchInput",
  component: SearchInput,
};

const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  numberPodcasts: 134,
};
