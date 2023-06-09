import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Default } from "./Home.stories";

describe("tests about Home page", () => {
  test("render all elements on default", async () => {
    render(
      <BrowserRouter>
        <Default {...Default.args} />
      </BrowserRouter>
    );
    expect(
      await screen.findByText("The Joe Budden Podcast")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Million Dollaz Worth Of Game")
    ).toBeInTheDocument();
    expect(screen.getByTestId("search")).toBeInTheDocument();
  });
});
