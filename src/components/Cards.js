import React from "react";

const Cards = () => {
  return (
    <div id="webcrumbs">
      <div className="h-full bg-white rounded-lg p-8 flex gap-6 flex-col">
        {" "}
        <div className="basis-1/4 flex flex-col">
          <div className="relative h-[200px] w-[100%]">
            <img
              src="https://tools-api.webcrumbs.org/image-placeholder/300/200/nature/1"
              alt="card one"
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-4 py-2 rounded-b-md">
              <p className="text-white text-lg font-semibold">Card One</p>
              <p className="text-gray-300 text-sm">Subtext for card one</p>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex flex-col">
          <div className="relative h-[200px] w-[100%]">
            <img
              src="https://tools-api.webcrumbs.org/image-placeholder/300/200/nature/2"
              alt="card two"
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-4 py-2 rounded-b-md">
              <p className="text-white text-lg font-semibold">Card Two</p>
              <p className="text-gray-300 text-sm">Subtext for card two</p>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex flex-col">
          <div className="relative h-[200px] w-[100%]">
            <img
              src="https://tools-api.webcrumbs.org/image-placeholder/300/200/nature/3"
              alt="card three"
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-4 py-2 rounded-b-md">
              <p className="text-white text-lg font-semibold">Card Three</p>
              <p className="text-gray-300 text-sm">Subtext for card three</p>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex flex-col">
          <div className="relative h-[200px] w-[100%]">
            <img
              src="https://tools-api.webcrumbs.org/image-placeholder/300/200/nature/4"
              alt="card four"
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-4 py-2 rounded-b-md">
              <p className="text-white text-lg font-semibold">Card Four</p>
              <p className="text-gray-300 text-sm">Subtext for card four</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
