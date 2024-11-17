import {useState} from "react";

import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import { CoreConcept } from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const stateArray = useState();    //State array includes always 2 elements with useState. First one is the currently existing value, initially the param of useState 
  //second one is a function that will be used to update useState
  function handleClick(selectedButton)
  {
      //selectedButton = "Components" or "JSX" or "Props" or "State"
      stateArray[1](selectedButton);
  }

  //Another alternative to displaying dynamic content.
  /*
  let content = <p>Please select a topic.</p>;

  if(stateArray[0])
  {
  content = <div id="tab-content">......
  }
   */
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((concept) => (<CoreConcept key={concept.title} {...concept}/>))}     {
            //Using the above method instead of the one below, we make sure that we use as many elements as our data.js has to offer. If data is deleted, the page will still
            //work fine
          }



          {/*<CoreConcept title="Components"               //Manual input for props
          description="The core UI building block."
          image = {componentsImg}
          ></CoreConcept>
          <CoreConcept title = {CORE_CONCEPTS[1].title}       //Dynamic input for props
          description = {CORE_CONCEPTS[1].description}
          image = {CORE_CONCEPTS[1].image}></CoreConcept>
          <CoreConcept title = {CORE_CONCEPTS[2].title}
          description = {CORE_CONCEPTS[2].description}
          image = {CORE_CONCEPTS[2].image}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}                  //Shorter way to do dynamic input, requires same names
          ></CoreConcept>     */}



        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/*<TabButton onSelect = {handleClick}>Components</TabButton>    IN THIS CASE THE handleClick does not get executed. You simply pass a pointer to the function
            so that it can be executed when it's clicked. If I'd used handleClick() instead, it'd be executed immediately.*/}
            <TabButton isSelected = {stateArray[0] === 'Components'} onSelect = {() => handleClick("Components")}>Components</TabButton>  {/*onSelect is a random name. It doesn't have any impact on the code, it's just a prop rather than a function or similar.*/}
            <TabButton isSelected = {stateArray[0] === 'JSX'} onSelect = {() => handleClick("JSX")}>JSX</TabButton>
            <TabButton isSelected = {stateArray[0] === 'Props'} onSelect = {() => handleClick("Props")}>Props</TabButton>
            <TabButton isSelected = {stateArray[0] === 'State'} onSelect = {() => handleClick("State")}>State</TabButton>
          </menu>
          {/*!stateArray[0] &&<p>Please select a topic.</p>*/} {
          //This method above also works to dynamically display content using the logical AND 
          }
          {!stateArray[0] ?<p>Please select a topic.</p> : <div id="tab-content">
            <h3>
              {EXAMPLES[stateArray[0].toLowerCase()].title}   {/*stateArray[0] contains the name of the button as it has been given to the handleClick function.
              We convert it to lowercase because in EXAMPLES it's all lower case.  */}
            </h3>
            <p>
            {EXAMPLES[stateArray[0].toLowerCase()].description}
            </p>
            <pre>
              <code>
              {EXAMPLES[stateArray[0].toLowerCase()].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
