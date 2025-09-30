import React, { use } from 'react';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    // const data = use(bookPromise);
    // console.log(data)

    const { bookName, author, image, rating, category, tags, yearOfPublishing, bookId } = singleBook

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-6">
                <figure className='p-3 bg-gray-100 rounded-lg'>
                    <img
                        className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-0 mt-5">
                    <div className='flex justify-between'>
                        {
                            tags.map((tag, idx) => <button key={tag + idx} className='btn'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className='border-2 border-dashed mt-4'></div>
                    <div className="card-actions flex justify-between mt-4">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<FaStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;