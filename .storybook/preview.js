import { BrowserRouter } from "react-router-dom";
import "./../src/styles/global.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const mockProvider = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export const decorators = [mockProvider];
