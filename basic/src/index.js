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

const BookList = () => {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book.title);
    }
    return (
    <>
    {/* <EventExample/> */}
    <section className='bookList'>
        {books.map((book) => {
            // const {img, title, author} = book;
            return <Book {...book} key={book.id} getBook= {getBook}/>;
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

const Book = (props) => {
    const {id, img, title, author, getBook} = props;
    const getSingleBook = () => {
        getBook(id);
    }

    return (
    <article className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <button onClick={getSingleBook}>display title</button>
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
