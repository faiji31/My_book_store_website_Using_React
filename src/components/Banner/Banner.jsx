import React from "react";
import BookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
       
        <div>
          
          <p className="py-6 font-extrabold text-6xl">
            Books to freshen up <br /> your bookshelf
          </p>
          <button className="btn btn-primary">View The List</button>

        </div> 
        <img src={BookImg className="max"
        />
      </div>
    </div>
  );
};

export default Banner;
