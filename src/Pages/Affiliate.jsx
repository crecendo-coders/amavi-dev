export default function Affiliate() {
  return (
    <div>
      <h3>Thank you to our Amavi Affiliates for their generous support!</h3>
      <div className="affiliate-list">
        <ul>
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
      </div>
      <h3>What it means to be an Amavi Affiliate</h3>
      <div>
        <p>
          Becoming an Amavi Affiliate is a meaningful way to support our mission. As a token of our appreciation for your donation, Amavi Chorale will provide the following benefits:
        </p>
        <ul>
          <li>(2) reserved seats at our concerts</li>
          <li>Your name featured in the program</li>
          <li>If you prefer to remain an anonymous donor, please indicate your preference in the donation notes.</li>
          <li>Additionally, you'll receive an invitation to a special reception following our season in June 2023.</li>
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Become an Affiliate
        </button>
      </div>
    </div>
  );
}
