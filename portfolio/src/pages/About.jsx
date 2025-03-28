import React from 'react';
import Layout from '../components/layout';
import Collection from '../components/collection';

const About = () => {
  return (
    <Layout className="w-screen">
      <div className="flex p-7 b ">
        <div className="flex flex-col grow justify-center md:flex-row md:gap-80 md:justify-center relative">
          <div className="profile-image-container">
            <img
              src="src/assets/photo/malbag.png"
              alt="Photo de profil"
              className="w-25 sm:w-30 md:w-60 lg:w-70"
            />
            
        
          </div>
        </div>
      </div>
<div className='overflow-auto space-y-10 w-full h-99 md:pr-30 '>
  <p className='sm:border sm:p-6 sm:rounded-2xl lg:ml-35 md:ml-20 m-7'>Je m'appelle Malick, j'ai 28 ans et j'habite à Paris, 
  Après un BTS Commerce International, une Licence dans le Marketing 
  et Management du Luxe et de la Mode, j'ai travaillé 6 ans dans le monde 
  du retail, jusqu'à occuper le poste de Store Manager pendant un peu plus de deux ans.
  En 2024, j'ai pris la grande décision de changer de vie professionnelle.
  J'ai intégré la Web@académie By EPITECH  en novembre 2024 pour devenir Developpeur Web. 
  <br></br>Pour me connaître un petit peu plus, je me suis dis que c'était sympa 
  de présenter ce que j'aime au quotidien. 
  </p>
    <Collection />
  {/* <p>Je m'appelle Malick Baguiri, j'ai 28 ans, j'habite à Paris depuis 8 ans 
    et j'ai plusieurs passions dans la vie.
    Tout d'abord mon chat Gary, qui partage ma vie depuis 2 ans.
     J'aime beaucoup cuisiner (si vous me recrutez, 
    je vous promets de délicieux cookies et gâteaux).
     Il m'arrive aussi de courir, car sous un coup de tête avec
    des amis, on se dit que ça pourrait être sympa de 
    s'inscrire a un 10km, semi-marathon ou un trail de 19km..
    A chaque fin de course, on se dit "plus jamais"...jusqu'au prochain pari.
    Je suis passionné par les plantes. Je fais aussi beaucoup de tricot et crochet. 
    </p>

    <p>après avoir fais des études en commerce international et 
    une licence en Marketing et Management du Luxe et de la Mode, 
    je me suis lancé dans le retail. J'ai intégré la marque Camper 
    en tant que vendeur,
    avec de la determination, j'ai eu l'opporunité d'évoluer
     et d'acquérir le poste 
    d'Asistant Manager, qui, quelques moi après s'es transformé en Responsable 
    de boutique.</p>

    <p>5 ans et demis après avoir intégré Camper, je me suis dit 
      qu'il était temps pour moi de 
      découvrir autre chose, de nature curieuse, je me suis orienté 
      vers le développement web.
      qui est celon moi, un domaine stimulant, car au vu de ses diversités
       de languages, des métiers,
      et de son evolution, il est impossible de tout maitriser. Et
     être en perpetuel apprentissage, et pour quelqu'un comme moi,
     c'est très important.
    </p> */}
</div>
      </Layout>
  )
}

export default About