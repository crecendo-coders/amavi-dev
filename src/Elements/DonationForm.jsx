import React from "react";
import axios from "axios";



  
const createCheckoutSession = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/create-checkout-session')
      location.replace(data)
    } catch (err) {
      console.log(err)
    }
    
    
}

const createCheckoutAffiliates = async (e) => {
  e.preventDefault()
  try {
    const {data} = await axios.post('/api/create-checkout-session/affiliates')
    location.replace(data)
  } catch (err) {
    console.log(err)
  }
}

const DonationForm = () => {
  return (
    <div>
      <div className="text-left text-lg m-10">
        <h1 className="text-4xl font-semibold">
          Support Our Mission: Make a Difference with Amavi Chorale
        </h1>
      </div>
      <div className="flex justify-center m-12">
        <div className="w-2/5 p-4 hidden lg:block">
          <img
            src="https://amaviphotos.s3.us-west-2.amazonaws.com/facebook-vertical-post-1080x1350+(1).jpg"
            alt="Choir"
          />
        </div>
        <div className="flex flex-col items-center lg:ml-10 lg:w-3/5 text-lg">
          <div className="text-left mt-4">
            <h3 className="text-lg font-semibold">
              Option 1: One-Time Tax-Deductible Donation
            </h3>
            <p className="text-gray-600">
              Your one-time, tax-deductible donation is a direct and meaningful
              way to support Amavi Chorale. With your generous contribution, you
              enable us to continue sharing the beauty of music with the world.
              Your support is instrumental in making each note of our
              performance resonate with emotion and passion.
            </p>
            <p className="text-gray-600">
              If you prefer to remain an anonymous donor, please indicate your
              preference in the donation notes.
            </p>
          </div>
          <form onSubmit={createCheckoutSession}>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Donate
              </button>
            </div>
            <div className="text-gray-600 mt-2 text-sm text-center">
              By clicking "Donate," you will be securely redirected to the
              Stripe website for your secure payment.
            </div>
          </form>

          <div className="text-left mt-4">
            <h3 className="text-lg font-semibold">
              Option 2: Become an Amavi Affiliate - Annual Subscription of $250
            </h3>
            <p className="text-gray-600">
              For those who wish to deepen their involvement and enjoy a more
              enriched experience with Amavi Chorale, we offer the opportunity
              to become an Amavi Affiliate. Your annual subscription of $250
              provides you with a special set of benefits as a token of our
              gratitude.
            </p>
            <p className="text-gray-600">
              <strong>Benefits of Becoming an Amavi Affiliate:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                (2) Reserved Seats at Our Concerts: Enjoy the best seats in the
                house at two of our concerts throughout the year, ensuring you
                never miss a captivating performance.
              </li>
              <li>
                Your Name Featured in the Program and Amavi Website: Your name
                will be prominently featured in our concert program and on the
                Amavi website, recognizing your valued support.
              </li>
              <li>
                Invitation to a Special Reception: You will receive an exclusive
                invitation to join us at a special reception following our
                season in June 2024, where you can meet the choir members and
                fellow supporters.
              </li>
            </ul>
            <p className="text-gray-600">
              Your annual subscription not only supports our mission but also
              grants you access to these exciting benefits. It's the perfect way
              to experience the magic of Amavi Chorale up close and personal.
            </p>
            <p className="text-gray-600 mt-4">
              Join us in our journey, and be a part of something truly
              extraordinary. Your support makes it all possible. Thank you for
              being a part of Amavi Chorale's mission to bring the gift of music
              to the world.
            </p>
          </div>
          <form onSubmit={createCheckoutAffiliates}>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Support Our Cause
              </button>
            </div>
            <div className="text-gray-600 mt-2 text-sm text-center">
              By clicking "Support Our Cause," you will be securely redirected
              to the Stripe website for your secure payment.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
