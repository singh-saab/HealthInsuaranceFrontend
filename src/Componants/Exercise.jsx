    import React, { useState } from 'react';

    // don't change the Component name "App"
    export default function App() {
        const [col, setCol] = useState('white');
        function handleClick(){
            if(col=='white')setCol('red')
            else setCol('white');
        }
        return (
            <div>
                <p style={{color : `${col}`}}>Style me!</p>
                <button onClick={handleClick}>Toggle style</button>
            </div>
        );
    }
