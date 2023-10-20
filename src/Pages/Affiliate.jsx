import React from "react";

export default function Affiliate() {
  return (
    <div className="text-left p-6">
      <div className="w-3/4 mx-auto flex">
        <img
          src="https://amaviphotos.s3.us-west-2.amazonaws.com/Cathedral(7)JPGfile+-+instasize.jpg"
          alt="Affiliates"
          className="w-2/5 p-4"
        />

        <div className="w-3/5 p-4 text-lg">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Thank you to our Amavi Affiliates for their generous support!
          </h2>

          <ul>
            <li>Suzie Ratelle</li>
            <li>Brad and Mary Ann Hatch</li>
            <li>Bob and Annette Nichols</li>
            <li>Joseph L Hatch, MD</li>
            <li>Adam Hansen</li>
            <li>Nan Bassett</li>
            <li>Dave Hanks</li>
            <li>Bob and Debbie Stevens</li>
            <li>
              <a href="https://www.kippandchristian.com/">
                Kipp & Christian P.C.
              </a>
            </li>
          </ul>

          <div className="text-left mt-4">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Become an Amavi Affiliate
            </h2>

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
                Your Name Featured in the Program: Your name will be prominently
                featured in our concert program, recognizing your valued
                support.
              </li>
              <li>
                Invitation to a Special Reception: You will receive an exclusive
                invitation to join us at a special reception following our
                season in June 2024, where you can meet the choir members and
                fellow supporters.
              </li>
            </ul>
            <p className="text-gray-600">
              If you prefer to remain an anonymous donor, please email us at info@amavichorale.org
            </p>
            <form
              action="/create-checkout-session/affiliates"
              method="POST"
              className="mt-4"
            >
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Support Our Cause
                </button>
              </div>
              <div className="text-gray-600 mt-2 text-sm text-center">
                By clicking "Support Our Cause," you will be securely redirected
                to the Stripe website for your payment.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
