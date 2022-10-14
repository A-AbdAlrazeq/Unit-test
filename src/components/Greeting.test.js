import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting Component", () => {
  //here you put your different test
  test("renders Hello World as a text", () => {
    //three things to write a test
    //Arrange =>set up our test ex:render the component which you wanna test
    //it's render entire component tree that's used inside jsx code
    render(<Greeting />); //we pass jsx code to create your component element
    //act: do the thing ,which you wanna test(run the logic that should be tested(eg:execute func))

    //assert: look at the output that's visible in browser and see if that match our expectation
    // screen:give us access to virtual screen to virtual dom,we use it to find element on screen
    const helloWorldElement = screen.getByText("Hello World!", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
    //you can write the full string here to find it,
    /*or you can use second arg {exact : true or false} if it false you can type sub string 
    and return pass test ,if exact true you must write the full string as it in jsx
     */
  }); //here we have one suite with one test we can add more
  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);
    //act here nothing because we don't click the button
    //assert
    const ParagraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(ParagraphElement).toBeInTheDocument();
  });
  test('renders "Changed!" if the button was  clicked', () => {
    //arrange
    render(<Greeting />);
    //act
    //since i have just one button i will use getByRole or i can use get by text
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //userEvent:it's use to triggers all userEvent in virtual screen

    //assert
    const OutputElement = screen.getByText("Changed!");
    expect(OutputElement).toBeInTheDocument();
  });
  //write the test if we clicked the button the paragraph will not be visible
  test('does not render "good to see you" if the button does not clicked', () => {
    //arrange
    render(<Greeting />);
    //act
    //since i have just one button i will use getByRole or i can use get by text
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //userEvent:it's use to triggers all userEvent in virtual screen

    //assert
    //here i try to find this element
    //getByText will fail the test if not found the element
    //we use queryByText because it will return null if element not found
    const OutputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(OutputElement).toBeNull(); //and here we want to check if the element is null
    /* it will be fail if we remove(!changedText) 
    inside render {!changedText && <p>It's good to see you!</p>}
    so we must check we render this paragraph if changedText is not true
    */
  });
}); //it's globally available func
//* when you write test you really want to test all possible scenarios
