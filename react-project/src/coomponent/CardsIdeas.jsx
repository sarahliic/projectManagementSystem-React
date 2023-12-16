import React from "react";
import "../coomponent/style.css";

function CardsIdeas(props) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.pinimg.com/564x/bc/6e/f7/bc6ef7917994cc6ff42212f890dc812e.jpg"
              alt="img-card"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {props.title}
              <div className="badge badge-accent text-white">
                {props.status}
              </div>
            </h2>
            <p>{props.descriptions}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{props.major}</div>
              {/* <div className="badge badge-outline w-32 text-black">
                {props.names}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsIdeas;
