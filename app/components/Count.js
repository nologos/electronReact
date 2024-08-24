// this is an example react component that renders every second to show how many times it has rendered

const React = require('react');
const { useState, useEffect } = React;

// these are the basic imports you need for a react component

const Count = () => {
  // this is a javascript arrow function

  const [count, setCount] = useState(0);
  const [minute, setMinute] = useState(0);
  // this is a react hook that allows you to use state in a functional component

  useEffect(() => {
    // useEffect is a react hook that allows you to use lifecycle methods in a functional component
    const timer = setTimeout(() => {
      // setTimeout is javascript way of coding sleep x
      setCount((prevCount) => prevCount + 1);
      setMinute((prevMinute) => Math.floor(count / 60));
    }, 1000);
    return () => clearTimeout(timer);
    // this is a cleanup function that clears the timer when the component unmounts, for example when you navigate to a different page
  }, [count]);

  return (
    <div className="container">
      <h2>I've rendered {count} times!</h2>
      <h3>Equivalent of {minute} minutes</h3>
    </div>
  );
  // this is the code that gets returned
};

export default Count;
// this takes the return code and exports it so that it can be used in other files
