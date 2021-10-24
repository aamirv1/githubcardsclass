import {useState} from 'react'
function App() {
  const [count, setcount] = useState(0)
return (
<>
<h1>Putting a Change</h1>
<button onClick={() => setcount(count-1)} >-</button>
<span>{count}</span>
<button onClick={() => setcount(count+1)} >+</button>
</>
    );
}

export default App;
