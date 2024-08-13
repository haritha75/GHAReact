import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Tasks List component", () => {
  render(<App />);
  const tasksListElement = screen.getByText(/Tasks List/i); // This should match the text in your TasksList component
  expect(tasksListElement).toBeInTheDocument();
});
