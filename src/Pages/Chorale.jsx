import React from "react";

export default function AboutChorale() {
  return (
    <div>
      <div className="text-left p-6">
        <div className="w-3/4 mx-auto flex">
          <img src="ChoirGroupJPGfile.jpg" alt="Choir" className="w-2/5 p-4" />
          <div className="w-3/5 p-4 text-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Mission</h2>

            <p>
              Amavi Chorale aspires to contribute to an already rich choral
              tradition along the Utah Wasatch Front by:
            </p>
            <li>Singing the finest choral repertoire</li>
            <li>Collaborating with local and national artists</li>
            <li>
              Providing a space for creativity and artistic outlet for our
              singers, staff, and audiences
            </li>
          </div>
        </div>
      </div>
      <div className="text-left p-6">
        <div className="w-3/4 mx-auto flex">
          <div className="w-3/5 p-4 text-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Motivation</h2>
            <p>
              Founded in 2017, Amavi Chorale is dedicated to creating meaningful
              musical experiences by giving first rate performances of the
              finest choral literature. As artists, educators, and advocates of
              the choral art, the Amavi Chorale aspires to reach audiences of
              all ages, backgrounds and socio-economic circumstances.
            </p>
            <p>
              The name Amavi (lat. I loved) illustrates how we are motivated by
              our love for music, people, all things beautiful, and our love for
              God.
            </p>
          </div>
          <img
            src="Cathedral(2)JPGfile.jpg"
            alt="Cathedral Organ"
            className="w-2/5 p-4"
          />
        </div>
      </div>
    </div>
  );
}
