import React from "react";

export default function AboutChorale() {
  return (
    <div>
      <div className="text-left p-6">
        <div className=" mx-auto flex">
        <div className="w-2/5 p-4 hidden md:block overflow-hidden">
          <img
          className="h-full w-full object-cover"
            src="https://amaviphotos.s3.us-west-2.amazonaws.com/Cathedral(2)JPGfile+-+instasize.jpg"
            alt="Choir"
          />
        </div>
          <div className="md:w-3/5 p-4 text-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Mission</h2>

            <h5 className="font-bold">Championing the Elevation of Choral Repertoire</h5>
            <p>
              Amavi Chorale is dedicated to the meticulous interpretation and
              vocal rendition of the most sublime and intricate choral
              compositions. We embrace this profound commitment as a means of
              preserving and revitalizing the cherished choral heritage in our
              region. By selecting and performing the finest choral repertoire,
              we aim to both honor the past and inspire the future.
            </p>

            <h5 className="font-bold">Facilitating Collaborative Artistry</h5>
            <p>
              We recognize the immense power of collaborative creativity. To
              this end, Amavi Chorale actively seeks out and collaborates with
              both local and national artists. These collaborations breathe
              fresh life and perspective into our performances, infusing our
              choral artistry with a dynamic spirit that transcends boundaries
              and draws from a diverse pool of talent.
            </p>

            <h5 className="font-bold">Fostering an Oasis of Creativity</h5>
            <p>
              Within the Amavi Chorale community, we consider the act of choral
              expression not only as a performance but as a profound artistic
              outlet. This extends to our dedicated singers, staff, and
              cherished audiences. We aim to create a nurturing space that
              nurtures creativity, offering the opportunity for all involved to
              find their own artistic voice and experience the transformative
              power of music. Through these collective efforts, we endeavor to
              weave a vibrant tapestry that beautifully contributes to the rich
              tapestry of the Utah Wasatch Front's choral legacy.
            </p>
          </div>
        </div>
      </div>
      <div className="text-left p-6">
        <div className=" mx-auto flex">
          <div className="md:w-3/5 p-4 text-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Our Motivation
            </h2>
            <p>
              Amavi Chorale, established in the year 2017, is passionately
              committed to curating and delivering profound musical experiences
              through the rendition of the most exquisite choral compositions.
              As a multifaceted collective of artists, educators, and ardent
              advocates of the choral discipline, Amavi Chorale earnestly
              aspires to engage and resonate with diverse audiences across all
              age groups, socio-economic strata, and cultural backgrounds.
            </p>
            <p>
              The very appellation "Amavi," derived from the Latin term "I
              loved," encapsulates our profound motivation—a deep-seated
              affection for music, a genuine reverence for the beauty that
              envelops our world, a profound love for humanity in all its
              diversity, and an abiding love for the divine presence.
            </p>
          </div>
          <div className="w-2/5 p-4 hidden md:block">
          <img
            src="https://amaviphotos.s3.us-west-2.amazonaws.com/ChoirGroupJPGfile+-+instasize.jpg"
            alt="Choir"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
