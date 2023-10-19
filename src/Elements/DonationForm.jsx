import React, { useState, useEffect } from "react";

const DonationForm = () => (
  <div className="flex justify-center">
    <div className="flex flex-col align-middle">

    <div className="product flex flex-col align-middle w-[500px]">
      <img
        src="https://amaviphotos.s3.us-west-2.amazonaws.com/amavi-big-logo.png"
        alt="Insert a donation image"
        className="h-36"
        />
      <div className="description">
      <h3>Please consider donating to support</h3>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST" className="flex flex-col">
      <div className="flex justify-center">
      <button type="submit" className="bg-blue-400">
        Donate
      </button>
      </div>
      <div>This button will take you to the stripe website for secure payments.</div>
    </form>
        </div>
  </div>
);

export default DonationForm