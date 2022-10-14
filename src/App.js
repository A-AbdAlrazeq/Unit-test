import "./App.css";
import Greeting from "./components/Greeting";
import Async from "./components/Async";
/*manual testing : write code and test it in browser<you see what your user will see=>
error prone: it's hard to test all combinations and scenarios
automated test: it's code that test your code,you test the individual building blocks of your app
it's very technical but allow you to test all building blocks at once=>
it's allow you to catch error earlier and write and ship better code in applications */

/* different kinds of automated test:

unit test: test the individual building block(func component),
project can contains hundred of unit test(the most common / important kind of test).

integration test: test the combination of multiple building blocks ex: multiple components work together
project contains a couple of integration test but not as many as you have unit tests
 (it's important but we are focus on unit test in most cases).

 end to end test(e2e): test complete scenarios in your app as the user would experience them,
 project typically contains  only a few e2e test,(it's important but can do manually ).
 
 what to test? test different building block ( small building block>>
  small focused test that's only test one main thing each,so you have  a lot of focused test 
  which then also fail for clear reason if they do fail instead of having a few large test 
  which could fail for all kinds of reasons).
  how to test? you wanna test success and error cases also test rare(but possible) scenario & results

  jest: tool for running our test and asserting the results
  react test library: for simulating and rendering our component 
  both tools are already setup for you when using create-react-app
   inside package.json :
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.5.0",
    install auto when create the react app
 */
function App() {
  return (
    <div className="App">
      <Greeting />
      <Async />
    </div>
  );
}

export default App;
