import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";
import {books} from './books';
import Book from './Book';

const BookList = () => {

    return (
    <>
    <h1>Amazon Best Sellers</h1>
    <section className='bookList'>
        {books.map((book) => {
            // const {img, title, author} = book;
            return <Book {...book} key={book.id}/>;
        })}
    </section>
    </>
    );
}

// const EventExample = () => {

//     return (
//         <section>
//             <form> 
//                 <h2>Typical Form</h2>
//                 <input
//                 type='text'
//                 name='example'
//                 onChange={(e) => console.log(e.target.value)}
//                 style={{ margin: '1rem 0'}}
//                 />
//                 <button type='submit'>Submit</button>
//             </form>
//             <button onClick={()=> console.log('click me')}>click me</button>
//         </section>
//     )
// }



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
