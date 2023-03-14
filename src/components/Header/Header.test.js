import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Default } from "./Header.stories";

describe("tests about header component", () => {
  test("render number application", () => {
    render(
      <BrowserRouter>
        <Default {...Default.args} />
      </BrowserRouter>
    );
    expect(screen.getByText("Podcaster")).toBeInTheDocument();
  });
});
