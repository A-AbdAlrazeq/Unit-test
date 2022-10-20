import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async Component", () => {
  test("renders post if request succeeds", async () => {
    /* we generally don't want to send http request for test will cause a lot of network traffic and if you have post request your test will be insert data to DB or
    changing thing in server,avoid if server down
    i don't test the fetch if sent request successfully, i want to test if my component behavior correctly once i get the response data or getting error
     depends on  diff outcome of sending a request
     so we replace th fetch with mock func ,override the built in func,func that's make what we want and not send a real request
     we can use it for fetch or local storage
      */
    window.fetch = jest.fn();
    /* so here we make fetch equal to new method defined by us
    fn is create mock func,so here we override the build in func fetch
    mockResolvedValueOnce: allow us to set a value fetch func should resolved it when it's called,so it's should resolve to an object that has a adjacent method
    because we work with resolved value,so we add json property because we work with json& use async because json return a new promise,and because the data that's returned is array
    we add the value inside array,and every post have id&title so we add it inside array,
    we can control different outcome to test multiple scenario
    *must return same data format */
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);
    // no need to use act because use effect will fetch and set posts auto
    /*getByRole is failed if we have more than one item >>
    so we use getAllByRole and the role is list item we find it in attached document*/
    /*getAllByRole lock instantly look for element in screen
    >>fetching post data takes a couple of millisecond or seconds so the test
     failed because we immediately get all item in screen and initially is there are none
     to fix it>>we use findAllByRole it's return promise
     >>react test library reevaluate the screen until is succeed>>it's will wait the http request until is succeed*/
    const listItemsElement = await screen.findAllByRole("listitem");
    //we can pass 3 arg,the sec is exact,third is timeout period
    //because it return promise we should await this before we work on the result
    //we use await it will wait until the all data returned from the request
    expect(listItemsElement).not.toHaveLength(0);
    //and here check if the length not equal 0(check if not empty)
  });
});
