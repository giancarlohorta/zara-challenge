import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Default } from "./ItemList.stories";

describe("tests about item list component", () => {
  test("render all elements on default", () => {
    render(
      <BrowserRouter>
        <Default {...Default.args} />
      </BrowserRouter>
    );
    expect(screen.getByText("The Joe Budden Podcast")).toBeInTheDocument();
    expect(screen.getByText("Drink Champs")).toBeInTheDocument();
  });
});
