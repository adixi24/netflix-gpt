import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my">
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶ play
        </button>
        <button className="bg-white text-black p-4 px-16 text-xl  rounded-lg mx-2 hover:bg-opacity-80">
           MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
