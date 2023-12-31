import React, { useState, useEffect } from "react";
import axios from "axios";


const Event = ({event}) => {

  return (
        <div className="flex flex-col justify-center bg-white shadow-lg">
          <div className="w-full h-fit bg-top bg-cover flex-col flex">
            <img src={event.image} alt="concert-banner" />
          </div>
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 md:flex-col md:items-center md:justify-center md:w-1/4">
              <div className="md:text-3xl">
                {new Date(event.datetime).toLocaleString("en-US", { month: "short" })}
              </div>
              <div className="md:text-6xl">{new Date(event.datetime).toLocaleString("en-US", {
                  day: "numeric",
                })}</div>
              <div className="md:text-xl">
                {new Date(event.datetime).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </div>
            </div>
            <div className="p-4 font-normal text-gray-800 md:w-3/4">
              <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                {event.name}
              </h1>
              <p className="leading-normal">{event.summary}</p>
              <div className="flex flex-row items-center mt-4 text-gray-700">
                <div className="w-1/2">
                  <a href={event.map}>{event.location}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Event;
