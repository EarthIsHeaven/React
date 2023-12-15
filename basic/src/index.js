import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(){
    return (
        <div>
            <Person/>
            <Address/>
        </div>
    )
}


const Person = ()=>{
    return (
    <h2>Thinley here!</h2>
    )
}
const Address = ()=> <p>Kathmandu, Nepal.</p>

// function Greeting(){
//     return React.createElement('h1', {}, 'hello World');
// }

// function Greeting(){
//     return React.createElement('div', {}, React.createElement('h1', {}, 'Hi'));
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
