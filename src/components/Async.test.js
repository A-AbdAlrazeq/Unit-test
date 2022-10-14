import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async Component", () => {
  test("renders post if request succeeds", async () => {
    render(<Async />);
    // no need to use act because use effect will fetch and set posts auto
    /*getByRole is failed if we have more than one item >>
    so we use getAllByRole and the role is listitem we find it in attached document*/
    /*getAllByRole lock instantly look for element in screen
    >>fetching post data takes a couple of millisecond or seconds so the test
     failed because we immediately get all item in screen and initially is there are none
     to fix it>>we use findallByRole it's return promise
     >>react test library reevaluate the screen until is succeed>>it's will wait the http request until is succeed*/
    const listItemsElement = await screen.findAllByRole("listitem");
    //we can pass 3 arg,the sec is exact,third is timeout period
    //because it return promise we should await this before we work on the result
    //we use await it will wait until the all data returned from the request
    expect(listItemsElement).not.toHaveLength(0);
    //and here check if the length not equal 0(check if not empty)
  });
});
