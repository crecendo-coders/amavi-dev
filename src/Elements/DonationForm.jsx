import React from "react";

const DonationForm = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-4/5 text-lg p-4">
        <div className="text-left mt-4">
          <h3 className="text-lg font-semibold">
            Support Our Mission: Make a Difference with Amavi Chorale
          </h3>
          <p className="text-gray-600">
            At Amavi Chorale, we are deeply committed to our mission of
            spreading the joy of music and creating harmonious moments that
            inspire and uplift our community. Your support plays a vital role in
            helping us achieve this goal. We offer two distinctive ways for you
            to be a part of our journey:
          </p>
        </div>

        <div className="text-left mt-4">
          <h3 className="text-lg font-semibold">
            Option 1: One-Time Tax-Deductible Donation
          </h3>
          <p className="text-gray-600">
            Your one-time, tax-deductible donation is a direct and meaningful
            way to support Amavi Chorale. With your generous contribution, you
            enable us to continue sharing the beauty of music with the world.
            Your support is instrumental in making each note of our performance
            resonate with emotion and passion.
          </p>
          <p className="text-gray-600">
            If you prefer to remain an anonymous donor, please indicate your
            preference in the donation notes.
          </p>
        </div>

        <form action="/create-checkout-session" method="POST" className="mt-4">
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Donate
            </button>
          </div>
          <div className="text-gray-600 mt-2 text-sm text-center">
            By clicking "Donate," you will be securely redirected to the Stripe
            website for your secure payment.
          </div>
        </form>

        <div className="text-left mt-4">
          <h3 className="text-lg font-semibold">
            Option 2: Become an Amavi Affiliate - Annual Subscription of $250
          </h3>
          <p className="text-gray-600">
            For those who wish to deepen their involvement and enjoy a more
            enriched experience with Amavi Chorale, we offer the opportunity to
            become an Amavi Affiliate. Your annual subscription of $250 provides
            you with a special set of benefits as a token of our gratitude.
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
              featured in our concert program, recognizing your valued support.
            </li>
            <li>
              Invitation to a Special Reception: You will receive an exclusive
              invitation to join us at a special reception following our season
              in June 2024, where you can meet the choir members and fellow
              supporters.
            </li>
          </ul>
          <p className="text-gray-600">
            Your annual subscription not only supports our mission but also
            grants you access to these exciting benefits. It's the perfect way
            to experience the magic of Amavi Chorale up close and personal.
          </p>
          <p className="text-gray-600">
            If you prefer to remain an anonymous donor, please indicate your
            preference in the donation notes.
          </p>

          <p className="text-gray-600 mt-4">
            Whichever option you choose, your contribution is invaluable to us
            and helps us continue to create beautiful music and unforgettable
            experiences for our community.
          </p>
          <p className="text-gray-600 mt-4">
            Join us in our journey, and be a part of something truly
            extraordinary. Your support makes it all possible. Thank you for
            being a part of Amavi Chorale's mission to bring the gift of music
            to the world.
          </p>
        </div>
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
            By clicking "Support Our Cause," you will be securely redirected to
            the Stripe website for your payment.
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
