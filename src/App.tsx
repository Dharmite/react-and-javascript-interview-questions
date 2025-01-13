import React from "react";
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"

function App() {
  // Question 4: How to center a div?
  const CenterDivComponent = () => {
    // if flex direction was row, justify content would be vertical center and align items would be horizontal center
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // horizontal center
          alignItems: "center", // vertical center
          height: "100vh",
          backgroundColor: "lightblue",
        }}
      >
        <h1>Centered Div</h1>
      </div>
    )
  }

  // Question 5: What is CSS box model?
  // The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. 
  // The box model allows us to add a border around elements, and to define space between elements. 
  // The box model is used to design and layout web pages.
  // The box model is a very important concept, one that you must understand and apply to every element you design.

  // Question 6: What are pure components in React?
  // Pure components are the components that do not re-render if the input props and state of the component do not change. 
  // It is a class component that extends PureComponent instead of Component.
  // PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you.
  // When props or state changes, PureComponent will do a shallow comparison on both props and state.
  // Component on the other hand won't compare current props and state to next out of the box.
  // in new react version, functional components are also pure components by default.
  // Meaning, if you use React.memo, it will only re-render if the props change.
  // React.memo is a higher order component. It’s similar to React.PureComponent but for functional components instead of classes.

  // Question 7: What is the difference between state and props in React?
  // Props are arguments passed into React components. Props are passed to components via HTML attributes.
  // State is managed within the component and is mutable. State is managed within the component and is mutable.

  // Question 8: What is React Error Boundary?
  // Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.
  // Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
  // Error boundaries do not catch errors for: Event handlers, Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks), Server side rendering, Errors thrown in the error boundary itself (rather than its children).

  // Question 9: What is React Context?
  // React Context provides a way to pass data through the component tree without having to pass props down manually at every level.
  // Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
  // Context is primarily used when some data needs to be accessible by many components at different nesting levels.

  // Question 10: What is useEffect hook?
  // The useEffect hook is a hook that allows you to perform side effects in function components.
  // It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in React class components.
  // useEffect is a hook that takes a function and an array of dependencies. The function is the side effect, and the array of dependencies is the list of variables that the effect depends on.
  // useEffect runs after the component renders for the first time, and after every update.
  // Some concepts to keep in mind when using useEffect:
  // 1. useEffect runs after every render, including the first render. This is different from componentDidMount and componentDidUpdate.
  // 2. useEffect runs after React has committed the changes to the DOM.
  // 3. useEffect runs after the browser has painted, so it does not block the painting process.
  // 4. useEffect runs asynchronously, so it does not block the browser from updating the screen.
  // 5. useEffect can return a cleanup function, which will run when the component unmounts or before the effect runs again.

  // Explain the difference between React Context and React Redux
  // React Context and React Redux are both used for state management in React applications.
  // React Context is a feature that allows you to pass data through the component tree without having to pass props down manually at every level.
  // React Context is primarily used when some data needs to be accessible by many components at different nesting levels.
  // React Redux is a library that provides a predictable state container for JavaScript applications.
  // React Redux is primarily used for managing the state of an application and making it easier to share state between components.
  // React Context is built into React, while React Redux is a separate library that can be used with React.
  // React Context is simpler and easier to use for smaller applications, while React Redux is more powerful and flexible for larger applications.
  
  // Why can't we use async/await in useEffect?
  // The useEffect hook cannot be async because it returns a cleanup function, which is synchronous.
  // If you make the useEffect function async, it will return a Promise, which is not supported by the useEffect hook.

  // What is the difference between essential and derived state in React?
  // Essential state is the state that is required for the component to function correctly.
  // Derived state is the state that is calculated based on the essential state.

  // Real world example of using essential and derived state in React
  // Essential state: A counter component that has a count state.
  // Derived state: A component that displays the count state in a different format, such as a string or a percentage.

  // Shopping cart example
  // Essential state: The items in the shopping cart.
  // Derived state: The total price of the items in the shopping cart.

  // Question 11: What is the disadvantage of using arrow functions to define React components?
  // The disadvantage of using arrow functions to define React components is that arrow functions do not have their own this context.
  // This means that you cannot access the this keyword inside an arrow function.
  // This can be a problem when you need to access the component's state or props inside the function.
  // To solve this problem, you can use the bind method to bind the this context to the arrow function.

  // Question 12: What is the difference between controlled and uncontrolled components in React?
  // Controlled components are components that are controlled by React. The value of the input is controlled by React state.
  // Uncontrolled components are components that are controlled by the DOM. The value of the input is controlled by the DOM.

  // Question 13: What is the disadvantage of placing state in react.context?
  // The disadvantage of placing state in React Context is that the state is shared between all components that use the context.
  // This can lead to unexpected behavior if the state is modified in one component and affects another component.
  // To avoid this problem, you can use the useReducer hook to manage the state in the context.
  // useReducer allows you to create a reducer function that handles the state changes in a predictable way.
  // This can help prevent bugs and make it easier to manage the state in the context.
  // useReducer is similar to Redux, but it is built into React and is easier to use.

  // Question 14: What type of tests can you write for React components?
  // There are several types of tests that you can write for React components:
  // 1. Unit tests: Test individual components in isolation.
  // 2. Integration tests: Test how components work together.
  // 3. End-to-end tests: Test the entire application from the user's perspective.
  // 4. Snapshot tests: Test the visual appearance of components.
  // 5. Performance tests: Test the performance of components.
  // 6. Accessibility tests: Test the accessibility of components.
  // 7. Security tests: Test the security of components.

  // What tools can you use for these tests?  
  // There are several tools that you can use for testing React components:
  // 1. Jest: A testing framework for JavaScript.
  // 2. React Testing Library: A library for testing React components.
  // 3. Enzyme: A testing utility for React components.
  // 4. Cypress: A testing framework for end-to-end testing.

  // Question 15: What type of tools can you use for integration tests?
  // There are several tools that you can use for integration tests:
  // 1. Jest: A testing framework for JavaScript.
  // 2. React Testing Library: A library for testing React components.
  // 3. Enzyme: A testing utility for React components.
  // 4. Cypress: A testing framework for end-to-end testing.

  // Question 16: What is the FCP (First Contentful Paint) metric in web performance?
  // The FCP (First Contentful Paint) metric measures the time it takes for the first piece of content to be rendered on the screen.
  // FCP is an important metric for web performance because it indicates how quickly users can see content on the screen.
  // A fast FCP can improve the user experience and increase user engagement.
  // FCP is one of the Core Web Vitals metrics that Google uses to measure the performance of web pages.

  // cdn can be used to load external libraries like bootstrap, jquery, etc.
  // cdn is a content delivery network that hosts files like images, videos, and scripts.
  // we can optimize the performance of our website by using cdn to load external files.
  // cdn can reduce the load time of our website by serving files from servers that are closer to the user's location.

  // Analyze libraries like lodash, moment.js, etc. and explain how they can be optimized for performance.
  // Analyze the bundle size of the library and remove unnecessary code.

  // Question 17: What is Server-Side Rendering (SSR) in React?
  // Server-Side Rendering (SSR) is the process of rendering a React application on the server and sending the fully rendered HTML to the client.
  // SSR can improve the performance of a React application by reducing the time it takes to load the initial page.
  // SSR can also improve the SEO of a React application by making it easier for search engines to crawl and index the content.
  // SSR can be implemented using libraries like Next.js, Gatsby, and Razzle.
  // Disadvantages of SSR: SSR can be more complex to set up than client-side rendering. 
  // SSR can also increase the load on the server and require more resources.
  // SSR can also make it harder to implement client-side features like animations and interactivity.

  // Question 18: How to pass data from parent to child components in React?
  // You can pass data from parent to child components in React using props.
  // Props are arguments passed into React components. Props are passed to components via HTML attributes.
  // You can pass data from a parent component to a child component by passing props to the child component.
  // You can access the props in the child component using the props object.

  // Example of passing data from parent to child components in React
  // Parent component:
  // function ParentComponent() {
  //   const data = "Hello, world!";
  //   return <ChildComponent data={data} />;
  // }
  // Child component:
  // function ChildComponent(props) {
  //   return <div>{props.data}</div>;
  // }

  // Question 19: How to pass data from child to parent components in React?
  // You can pass data from child to parent components in React using callbacks.
  // You can pass a callback function from the parent component to the child component as a prop.
  // The child component can call the callback function with the data as an argument.
  // The parent component can then update its state with the data passed from the child component.

  // Question 20: How to render an element outside of componet scope/tree in React?
  // You can render an element outside of the component scope/tree in React using the ReactDOM.createPortal method.
  // ReactDOM.createPortal allows you to render a React element outside of the component tree.
  // You can use ReactDOM.createPortal to render a modal, tooltip, or other UI element that needs to be rendered outside of the component tree.

  // Question 21: What is the DOM in React?
  // The DOM (Document Object Model) is a programming interface for HTML and XML documents.
  // The DOM represents the structure of a document as a tree of nodes.
  // Each node in the DOM tree represents an element, attribute, or text in the document.
  // React uses a virtual DOM to represent the structure of a React component.
  // The virtual DOM is a lightweight copy of the actual DOM that React uses to optimize rendering performance.
  // React updates the virtual DOM when the state or props of a component change, and then updates the actual DOM with the changes.
  // This allows React to update the DOM efficiently and minimize the number of changes to the actual DOM.

  // Question 22: How to implement lazy loading in React?
  // You can implement lazy loading in React using the React.lazy and Suspense components.
  // React.lazy allows you to load a component dynamically when it is needed.
  // Suspense allows you to show a loading indicator while the component is being loaded.
  // You can use React.lazy and Suspense to lazy load components that are not needed immediately when the page loads.
  // This can improve the performance of your React application by reducing the initial load time.

  // example of lazy loading in React
  // const LazyComponent = React.lazy(() => import("./LazyComponent"));
  // function App() {
  //   return (
  //     <div>
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <LazyComponent />
  //       </Suspense>
  //     </div>
  //   );
  // }

  // Real life example of lazy loading in React - image gallery - load images only when user scrolls to them - infinite scroll - load modal only when user clicks on image

  // Question 23: What is the difference between React Native and React?
  // React is a JavaScript library for building user interfaces.
  // React Native is a framework for building mobile applications using React.

  // Question 24: What is the difference between localStorage and sessionStorage in HTML5?
  // localStorage and sessionStorage are two ways to store data in the browser in HTML5.
  // localStorage stores data with no expiration date.
  // sessionStorage stores data for the duration of the page session.
  // localStorage data is persistent across browser sessions and tabs.
  // sessionStorage data is only available for the duration of the page session.

  // Question 25: What is the best way to add global store to your react app or project?
  // The best way to add a global store to your React app or project is to use a state management library like Redux or MobX.
  // Redux is a predictable state container for JavaScript applications.
  // MobX is a simple and scalable state management library.

  // Question 26: What is the difference between React and Angular?
  // React is a JavaScript library for building user interfaces.
  // Angular is a JavaScript framework for building web applications.
  // React is more lightweight and flexible than Angular.
  // Angular is more opinionated and provides more features out of the box.
  // React is easier to learn and use than Angular.
  // Angular is more powerful and scalable than React.

  // Question 27: What is the difference between React and Vue?
  // React is a JavaScript library for building user interfaces.
  // Vue is a JavaScript framework for building web applications.
  // React is more lightweight and flexible than Vue.
  // Vue is more opinionated and provides more features out of the box.

  // Question 28: What is the difference between React and Svelte?
  // React is a JavaScript library for building user interfaces.
  // Svelte is a new way to build web applications.
  // React uses a virtual DOM to optimize rendering performance.
  // Svelte compiles the code to vanilla JavaScript at build time.
  // React is more flexible and scalable than Svelte.
  // Svelte is more lightweight and fast than React.

  // Question 29: What is the difference between redux and redux toolkit?
  // Redux is a predictable state container for JavaScript applications.
  // Redux Toolkit is the official, recommended way to write Redux logic.
  // Redux Toolkit provides a set of tools and best practices for writing Redux code.
  // Redux Toolkit includes utilities like createSlice, createReducer, and createAsyncThunk.
  // Redux Toolkit is easier to use and more powerful than Redux.

  // Question 30: What is the difference between React.memo and useMemo in React?
  // React.memo is a higher order component that memoizes a functional component.
  // useMemo is a hook that memoizes a value.
  // React.memo is used to optimize the performance of functional components.
  // useMemo is used to optimize the performance of expensive calculations.
  // React.memo is used to prevent unnecessary re-renders of functional components.
  // useMemo is used to prevent unnecessary re-calculations of values.

  // Question 31: What is a higher order component in react?
  // A higher order component is a function that takes a component as an argument and returns a new component.
  // Higher order components are used to share code between components.
  // Higher order components are used to add functionality to components.
  // Higher order components are used to create reusable logic for components.

  // Example of a higher order component in React
  // function withLogger(Component) {
  //   return function(props) {
  //     console.log("Rendering component:", Component.name);
  //     return <Component {...props} />;
  //   };
  // }
  // const EnhancedComponent = withLogger(Component);

  // Question 32: What is the difference between React and React DOM?
  // React is a JavaScript library for building user interfaces.
  // React DOM is a package that provides DOM-specific methods for React.
  // React is used to build user interfaces.
  // React DOM is used to render React components to the DOM.

  // Question 33: Give me an example of basic React SSR implementation?
  // import React from "react";
  // import ReactDOMServer from "react-dom/server";
  // function App() {
  //   return <div>Hello, world!</div>;
  // }
  // const html = ReactDOMServer.renderToString(<App />);
  // console.log(html);

  // You can use Next.js implement SSR in React.

  return (
    <>
      {/* <Question1 /> */}
      {/* <Question2 /> */}
      {/* <Question3 /> */}
      <CenterDivComponent />
    </>
  )
}

export default App
