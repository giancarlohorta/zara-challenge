import { MemoryRouter } from "react-router-dom";
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
  <MemoryRouter initialEntries={["/podcast/1460157002/episode/1000603837862"]}>
    <Story />
  </MemoryRouter>
);

export const decorators = [mockProvider];
