import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import MovieCard from "./";
import { movie } from "./__fixtures__";

describe("<MovieCard />", () => {
  it("should have testId", () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <MovieCard movie={movie} />
      </Router>
    );
    const card = getByTestId("movie");

    expect(card).toBeTruthy();
  });

  it("should render the movie title", () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <MovieCard movie={movie} />
      </Router>
    );
    const title = getByText("The Suicide Squad");

    expect(title).toBeInTheDocument();
  });
});
