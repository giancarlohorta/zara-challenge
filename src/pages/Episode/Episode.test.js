import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Default } from "./Episode.stories";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    podcastId: "1460157002",
    episodeId: "1000603837862",
  }),
  useRouteMatch: () => ({ url: "/podcast/1460157002/episode/1000603837862" }),
}));

describe("tests about Episode page", () => {
  test("render all elements on default", () => {
    render(
      <MemoryRouter
        initialEntries={["/podcast/1460157002/episode/1000603837862"]}
      >
        <Default {...Default.args} />
      </MemoryRouter>
    );
    expect(
      screen.getByText("ROB49: MILLION DOLLAZ WORTH OF GAME EPISODE 210")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/New Orleans very own Rob49 joins us this/gi)
    ).toBeInTheDocument();
    expect(screen.getByRole("region")).toBeInTheDocument();
  });
});
