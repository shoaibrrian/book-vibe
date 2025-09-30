import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id)
    // console.log(id)

    const data = useLoaderData();
    // console.log(data)

    const singleBook = data.find(book => book.bookId === bookId)

    const { bookName, image, author, category, review, tags, totalPages, rating, publisher, yearOfPublishing } = singleBook;


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">By: {author}</p>
                        <hr />
                        <p>{category}</p>
                        <hr />
                        <p>Review: {review}</p>
                        <div>
                            {
                                tags.map(tag => <button>Tags #{tag}</button>)
                            }
                        </div>
                        <hr />
                        <p>Number of Pages: {totalPages}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Rating: {rating}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;