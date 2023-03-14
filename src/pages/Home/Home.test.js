import { render, screen } from "@testing-library/react";
import { Default } from "./Home.stories";

describe("tests about Home page", () => {
  test("render all elements on default", () => {
    render(<Default {...Default.args} />);
    const EpisodeName = screen.getByText(
      "PRINCE FAMILY: MILLION DOLLAZ WORTH OF GAME EPISODE 205"
    );
    expect(screen.getByText(/Home: 7/gi)).toBeInTheDocument();
    expect(EpisodeName).toBeInTheDocument();
    expect(EpisodeName).toHaveAttribute(
      "href",
      "/podcast/1460157002/episode/1000598151960"
    );
    expect(screen.getByText("2023-02-06")).toBeInTheDocument();
    expect(screen.getByText("60:47")).toBeInTheDocument();
  });
});
