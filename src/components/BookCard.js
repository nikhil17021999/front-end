import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const BookCard = (props) => {
    const book = props.book;

    return (
        
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <h6>{book.description}</h6>
            
                <h6>Rs.{book.price-book.price/10}</h6>
                
               
            </div>
        </div>
        
    )
};

export default BookCard;