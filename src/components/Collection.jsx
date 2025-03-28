import React from 'react';
import PhotoAbout from './PhotoAbout';
import Carousel from './Carousel'; 

const Collection = () => {

  const gary = [
    "/src/assets/photo/garyEtMoi.jpeg",
    "/src/assets/photo/Gary.jpeg",
    "./src/assets/photo/garyNap.jpeg"
  ];
 

  const bretagne = [
    "src/assets/photo/cote.jpeg",
    "src/assets/photo/sable.jpeg",
  
  ];


  const food = [
    "/src/assets/photo/quiche.jpeg",
    "/src/assets/photo/Cookie.jpeg",
    "/src/assets/photo/tarteFraises.jpeg",
    "src/assets/photo/chouxfleur.jpeg"
  ];


  const sport = [
   "src/assets/photo/MoiMedaille.png",
    "src/assets/photo/trail.jpeg"
  ];

  const flowers = [
    "src/assets/photo/fleurAnthurium.jpeg",
    "src/assets/photo/bouquet.jpeg",
    "src/assets/photo/grosseFleur.jpeg"
  ];

  const knit = [
    "src/assets/photo/bonnet.jpeg",
    "src/assets/photo/moiCrochet.jpeg",
    "src/assets/photo/chouchou.jpeg"
  ];

  return (
    <div className='md:flex-col'>
      <div className='mb-8 m-7 flex flex-col grow justify-center md:flex-row md:gap-2 md:p-0 md:m-0 md:mr-12'>
      <Carousel carousel={gary}/>
      <p className="text-center sm:mt-4 sm:mb-4 text-lg text-white-600 md:w-150 lg:w-200 xl:w-250">
        Je partage ma vie avec mon chat Gary de deux ans.
        Ce n'est pas le dernier en bêtises...
      </p>
      </div>
      <div className='mb-8 m-7 flex flex-col grow justify-center md:flex-row md:gap-2 md:p-0 md:m-0 md:mr-12'>
      <Carousel carousel={bretagne} />
      <p className="text-center sm:mt-4 sm:mb-4 text-lg text-white-600 md:w-150 lg:w-200 xl:w-250">
        Quelques photos des Côtes Bretonnes,
        là où j'y ai grandi jusqu'à mes 21 ans</p>
      </div>
      <div className='mb-8 m-7 flex flex-col grow justify-center md:flex-row md:gap-2 md:p-0 md:m-0 md:mr-12'>
      <Carousel carousel={food} />
      <p className="text-center sm:mt-4 sm:mb-4 text-lg text-white-600 md:w-150 lg:w-200 xl:w-250">
        J'ai une grande passion pour la cuisine, 
        Si vous me prenez en tant qu'alternant, 
        je vous promet de vous faire pleins de cookies ! 
      </p>
      </div>
      <div className='mb-8 m-7 flex flex-col grow justify-center md:flex-row md:gap-2 md:p-0 md:m-0 md:mr-12'>
      <Carousel carousel={sport} />
      <p className="text-center sm:mt-4 sm:mb-4 text-lg text-white-600 md:w-150 lg:w-200 xl:w-250">
      Je pratique la course à pieds depuis deux ans. 
      Mon objectif est de faire un marathon en 2026 !
      </p>
      </div>
      <div className='mb-8 m-7 flex flex-col grow justify-center md:flex-row md:gap-2 md:p-0 md:m-0 md:mr-12'>
      <Carousel carousel={flowers} />
      <p className="text-center sm:mt-4 sm:mb-4 text-lg text-white-600 md:w-150 lg:w-200 xl:w-250">
        Depuis quelques années, je m'interresse aux plantes, 
        j'en ai une bonne vingtaines chez moi.
        A défault d'avoir un jardin sur Paris, je m'offre 
        quelques fleurs de temps en temps.
      </p>
      </div>
      <div className='mb-8 m-7 flex flex-col grow justify-center md:flex-row md:gap-2 md:p-0 md:m-0 md:mr-12'>
      <Carousel carousel={knit} />
      <p className="text-center sm:mt-4 sm:mb-4 text-lg text-white-600 md:w-150 lg:w-200 xl:w-250">
        Depuis maintenant 6 ans, je pratique à mes heures perdues
        le crochet et le tricot. J'ai pu faire de nombreux bonnets, 
        bobs, echarpes, pulls, sacs ou encore chouchous..</p>
      </div>
    </div>
  );
}

export default Collection