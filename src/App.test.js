import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders My really cool blog site ", () => {
  render(<App />);
  const linkElement = screen.getByText(/My really cool blog site/i);
  const linkElement = screen.getByText(/Auto Review:/i);
  const linkElement = screen.getByText(/Biology Today:/i);
  expect(linkElement).toBeInTheDocument();
});
