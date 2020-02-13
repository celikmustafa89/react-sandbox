import React from 'react';

function Hello(){
    const sayHello = () => {
        console.log("hello helo");
      };

    return (
      <button onClick={sayHello}>Click</button>
    )
}

export default Hello;