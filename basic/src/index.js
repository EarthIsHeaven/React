import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const BookList = () => {
    return <section className='bookList'>
        <Book />
        <Book />
        <Book />
    </section>
}

const Book = () => {
    return <article className='book'>
        <Image />
        <Title />
        <Author />
    </article>
}

const Image = () => <img src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yHTLnNKSL._SY466_.jpg' alt='Breakout Trading Made Easy'/>
const Title = () => <h2>Breakout Trading Made Easy</h2>
const Author = () => {
    return <h4>Sunil Gurjar</h4>
}

//Different ways to create component

// const Person = ()=>{
//     return (
//     <h2>Thinley here!</h2>
//     )
// }
// const Address = ()=> <p>Kathmandu, Nepal.</p>

// function Greeting(){
//     return React.createElement('h1', {}, 'hello World');
// }

// function Greeting(){
//     return React.createElement('div', {}, React.createElement('h1', {}, 'Hi'));
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
