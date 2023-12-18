import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const books = [
    {
        title : 'Interesting Facts For Curious Minds: 1572',
        author : 'Jordan Moore',
        img : './images/book.jpg',
        id : 1
    },
    {
        title : 'Oath and Honor: A Memoir and a Warning',
        author : 'Liz Cheney',
        img : './images/img2.jpg',
        id : 2
    },
    {
        title : 'The Heaven & Earth Grocery Store: A Novel',
        author : 'James McBride',
        img : './images/img3.jpg',
        id: 3
    }
]

// const firstBook = {
//     title : 'Interesting Facts For Curious Minds: 1572',
//     author : 'Jordan Moore',
//     img : './images/book.jpg'
// }
// const secondBook = {
//     title : 'Oath and Honor: A Memoir and a Warning',
//     author : 'Liz Cheney',
//     img : './images/img2.jpg'
// }
// const thirdBook = {
//     title : 'The Heaven & Earth Grocery Store: A Novel',
//     author : 'James McBride',
//     img : './images/img3.jpg'
// }

const BookList = () => {
    return (
    <section className='bookList'>
        {books.map((book) => {
            // const {img, title, author} = book;
            return < Book {...book} key={book.id} />;
        })}
        {/* <Book title = {firstBook.title} author = {firstBook.author} img = {firstBook.img}/>
        <Book title = {secondBook.title} author = {secondBook.author} img = {secondBook.img}/>
        <Book title = {thirdBook.title} author = {thirdBook.author} img = {thirdBook.img}/> */}
    </section>
    );
}

const Book = (props) => {
    const {img, title, author} = props;
    console.log(props);

    return (
    <article className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
    );
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
