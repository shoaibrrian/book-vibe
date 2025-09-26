import React from 'react';

import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bookImage}
                    className="max-w-sm rounded-lg shadow-2xl mr-28 my-20"
                />
                <div className='ml-28'>
                    <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary mt-12">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;