import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Default } from "./Loader.stories";

describe("tests about loader component", () => {
  test("render all elements on default", () => {
    render(
      <BrowserRouter>
        <Default {...Default.args} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
