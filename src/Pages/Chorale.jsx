export default function AboutChorale() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-6">
        About the Amavi Chorale
      </h2>
      <h3 className="text-2xl font-semibold mb-4">Our Motivation</h3>
      <div className="max-w-prose mx-auto mb-6">
        Founded in 2017, Amavi Chorale is dedicated to creating meaningful
        musical experiences by giving first-rate performances of the finest
        choral literature. As artists, educators, and advocates of the choral
        art, the Amavi Chorale aspires to reach audiences of all ages,
        backgrounds, and socio-economic circumstances.
      </div>
      <img
        src="about-chorale-organ.jpeg"
        alt="Chorale Organ"
        className="mx-auto mb-6"
      />
      <div className="max-w-prose mx-auto">
        The name Amavi (lat. I loved) illustrates how we are motivated by our
        love for music, people, all things beautiful, and our love for God.
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
      <img src="about-chorale-slc.jpeg" alt="SLC" className="mx-auto mb-6" />
      <div className="max-w-prose mx-auto mb-6">
        Amavi Chorale aspires to contribute to an already rich choral tradition
        along the Utah Wasatch Front by:
      </div>
      <ul className="max-w-prose mx-auto list-disc list-inside">
        <li>Singing the finest choral repertoire</li>
        <li>Collaborating with local and national artists</li>
        <li>
          Providing a space for creativity and artistic outlet for our singers,
          staff, and audiences
        </li>
      </ul>
      <img src="chorale-wide.jpeg" alt="chorale" className="mx-auto mt-8" />
    </>
  );
}
