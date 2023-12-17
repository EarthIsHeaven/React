import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const title = 'Breakout Trading Made Easy';
const author = 'Sunil Gurjar';
const img = 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yHTLnNKSL._SY466_.jpg';

const BookList = () => {
    return <section className='bookList'>
        <Book job='developer'/>
        <Book title='random title' number={22}/>
        <Book />
    </section>
}

const Book = (props) => {

    return <article className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <p>{props.job}</p>
        <p>{props.title}</p>
        <p>{props.number}</p>
    </article>
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
