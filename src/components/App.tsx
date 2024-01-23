import { useState } from "react";
import './App';
export const  App = () => {
    const [count,setcount] = useState<number>(0);


    const increement = () => setcount(prev => prev + 1)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increement}>inc</button>
        </div>
    );
}

export default App;