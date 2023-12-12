import React from 'react';
import ReactDOM from 'react-dom/client';

// function Greeting(){
//     return <h2>Hello World!</h2>
// }

// function Greeting(){
//     return React.createElement('h1', {}, 'hello World');
// }

function Greeting(){
    return React.createElement('div', {}, React.createElement('h1', {}, 'Hi'));
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
