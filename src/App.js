import React, {useState} from 'react';
import Hello from './hello';
import Tweet from './Tweet';


function App(){

  const [isRed,setRed] = useState(false);
  const [count,setCount] = useState(0);

  function increment() {
    setCount(count+1);
    setRed(!isRed);
  }

  const [users, setUsers] = useState([
    {name: "mustafa", message:"balalblalbla"},
    {name: "kamil", message:"dayı dayı"}
  ]);

  return(
    <div>
      <div>
        <h1> Hello World</h1>
        <Hello />
        <Tweet name="mustafa" message="bla bla bla bla bla"></Tweet>
        {users.map(user =>(
          <Tweet name={user.name} message={user.message}/>
        ))}
      </div>
      <div>
        <button onClick={increment}>increment</button>
        <h1 className={isRed ? "red" : ""}>change my color</h1>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;