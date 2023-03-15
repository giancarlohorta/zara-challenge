import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Default } from "./Podcasts.stories";

describe("tests about Podcasts page", () => {
  test("render all elements on default", async () => {
    render(
      <BrowserRouter>
        <Default {...Default.args} />
      </BrowserRouter>
    );
    expect(
      await screen.findByText("Million Dollaz Worth Of Game")
    ).toBeInTheDocument();
  });
});
