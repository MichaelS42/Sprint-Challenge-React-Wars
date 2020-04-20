# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library for building web applications. It was developed by Facebook to handle the dynamic and data-heavy UI. To keep up with the complexity of modern web applications, ReactJS
was created to offload the data from apps from the DOM. The engineers who created ReactJS built a virtual DOM to interact with the original DOM to render the state in a more efficient manner.
The coding side of ReactJS is made up of "react components" which are blocks of code that renders parts of the web application individually or can be used together passing with props.



1. Describe component state.

Component state is an object of properties that control the behavior of the component. The state of a component holds the property values (data) which can be modified by either user actions or other actionswhen the state of a component is changed React will render the modified component again to the browser.



1. Describe props.

Props are the same to React as parameters are to JS functions. The primary purpose of props is to allow developers to create components that can be reused by passing data that will render the componentto its initial state.



1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect in ReactJS is anything the impacts anything outside the scope of the function that is being executed. Some examples of side effects are timers, manipulating the DOM and fetching data from an API. They make components render a different output for the same state and props.

