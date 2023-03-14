import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Default, WithDescription } from "./Item.stories";

describe("tests about item component", () => {
  test("render all elements on default", () => {
    render(
      <BrowserRouter>
        <Default {...Default.args} />
      </BrowserRouter>
    );
    expect(screen.getByText("The Joe Budden Podcast")).toBeInTheDocument();
    expect(
      screen.getByText("Author: The Joe Budden Network")
    ).toBeInTheDocument();
  });
  test("render all elements on with description", () => {
    render(
      <BrowserRouter>
        <WithDescription {...WithDescription.args} />
      </BrowserRouter>
    );
    expect(screen.getByText("The Joe Budden Podcast")).toBeInTheDocument();
    expect(
      screen.getByText("Author: The Joe Budden Network")
    ).toBeInTheDocument();
    expect(screen.getByText("Descrition:")).toBeInTheDocument();
    expect(screen.getByText(/Tune into Joe Budden/gi)).toBeInTheDocument();
  });
});
