import { render, screen } from "@testing-library/react";
import App from "./App";

/* test method take two argument,first is description of the test,and sec is anonymous func
which contains the actual test and code
 */
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); //locking for text using regex case insensitive
  expect(linkElement).toBeInTheDocument(); // and here check if that element actually in the doc
  //we run the test code using npm test it will run any file end with (.test.js)
});
