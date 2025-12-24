import React from "react";
import BookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-gray-300 min-h-600px rounded-3xl my-10">
      <div className="hero-content flex-col lg:flex-row center">
       
        <div className="m-10">
          
          <p className="py-6 font-extrabold text-4xl text-black">
            Books to freshen up  your bookshelf
          </p>
          <button className="btn btn-primary ">View The List</button>

        </div> 
        <img className="w-auto size-80 rounded-4xl" src={BookImg }
        />
      </div>
    </div>
  );
};

export default Banner;
