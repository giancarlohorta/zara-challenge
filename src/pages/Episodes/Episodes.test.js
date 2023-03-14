import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Default } from "./Episodes.stories";

describe("tests about Episodes page", () => {
  test("render all elements on default", () => {
    render(
      <BrowserRouter>
        <Default {...Default.args} />
      </BrowserRouter>
    );
    const EpisodeName = screen.getByText(
      "PRINCE FAMILY: MILLION DOLLAZ WORTH OF GAME EPISODE 205"
    );
    expect(screen.getByText(/Episodes: 7/gi)).toBeInTheDocument();
    expect(EpisodeName).toBeInTheDocument();
    expect(EpisodeName).toHaveAttribute(
      "href",
      "/podcast/1460157002/episode/1000598151960"
    );
    expect(screen.getByText("2023-02-06")).toBeInTheDocument();
    expect(screen.getByText("60:47")).toBeInTheDocument();
  });
  // test("call function when type a word", () => {
  //   const handleChange = jest.fn();
  //   render(
  //     <BrowserRouter>
  //       <Default {...Default.args} onChange={handleChange} />
  //     </BrowserRouter>
  //   );
  //   userEvent.type(screen.getByTestId("search"), "H");
  //   expect(handleChange).toHaveBeenCalledTimes(1);
  // });
});
