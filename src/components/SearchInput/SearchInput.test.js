import { userEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Default } from "./SearchInput.stories";

describe("tests about loader component", () => {
  test("render all elements on default", () => {
    render(
      <BrowserRouter>
        <Default {...Default.args} />
      </BrowserRouter>
    );
    expect(screen.getByText("134")).toBeInTheDocument();
    expect(screen.getByTestId("search")).toBeInTheDocument();
  });
  test("call function when type a word", () => {
    const handleChange = jest.fn();
    render(
      <BrowserRouter>
        <Default {...Default.args} onChange={handleChange} />
      </BrowserRouter>
    );
    userEvent.type(screen.getByTestId("search"), "H");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
