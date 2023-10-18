import React from "react";

const Members = () => {
  const videos = [
    {
      title: "Messe Solennelle, Op. 16: I. Kyrie",
      src: "https://www.youtube.com/embed/uEbMZCnLOlQ?si=waKELqIxi6dSKPoC",
    },
    {
      title: "Messe Solennelle, Op. 16: II. Gloria",
      src: "https://www.youtube.com/embed/cWc58HKYf20?si=Ga1FrB4UFbP5065D",
    },
    {
      title: "Messe Solennelle, Op. 16: III. Sanctus",
      src: "https://www.youtube.com/embed/5ffXyCIMXtg?si=f0oJ4TG3gJJKpVHr",
    },
    {
      title: "Messe Solennelle, Op. 16: IV. Benedictus",
      src: "https://www.youtube.com/embed/DFW2UnbOfI8?si=JsYY-oSnYretX_w2",
    },
    {
      title: "Messe Solennelle, Op. 16: V. Agnus Dei",
      src: "https://www.youtube.com/embed/9vNmA0nPinM?si=UMvIPMIUufXGNabA",
    },
    {
      title: "Bruckner - Os justi",
      src: "https://www.youtube.com/embed/nXYbEyvVXUk?si=cm0DITGPE7scFTdC",
    },
    {
      title: "Gjeilo - The Ground",
      src: "https://www.youtube.com/embed/xUcrTV62A4k?si=YH4Fpa6zVLvL9PWx",
    },
    {
      title: "Bradford - Suo Gan",
      src: "https://www.youtube.com/embed/bUK9HXt_nGk?si=zJn4Xpt-7ru01feV",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <p className="text-white text-3xl mb-4">Choir Member Resources</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="w-full">
            <iframe
              className="w-full h-48 md:h-60 lg:h-52"
              src={video.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="text-white text-center mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
