
import Title from "./components/title"
import Garniture from "./components/garniture"
import Image from "next/image"
import Nav from "./components/navigation"
import { Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";
import Footer from "./components/footer";



export default function Home() {
  const recettes = [
    {
      title: "Tacos (3mcx)",
      image: "/tacos.jpg",
      description: "Les meilleurs tacos à Montréal chez Rosa Mexicano",
      garnitures: [
        { ingredient: "Porc", prix: "16.50" },
        { ingredient: "Poisson pané", prix: "20.50" },
        { ingredient: "Boeuf", prix: "16.50" },
        { ingredient: "Boeuf salé", prix: "20.50" },
        { ingredient: "Poulet", prix: "16.50" },
        { ingredient: "Suadero", prix: "16.50" },
        { ingredient: "Porc mariné", prix: "16.50" },
        { ingredient: "Crevettes panées", prix: "20.50" },
      ],
    },
    {
      title: "Burrito",
      image: "/burrito.webp",
      description: "Sandwich mexicain roulé dans des tortillas de blé, garni de riz, haricots, laitue, tomate, fromage et garniture de votre choix. Le tout agrémenté d'une touche de crème sure, de maïs et de guacamole.",
      garnitures: [
        { ingredient: "Poulet", prix: "20" },
        { ingredient: "Champignons", prix: "20" },
        { ingredient: "Suadero", prix: "20" },
        { ingredient: "Nopal", prix: "20" },
        { ingredient: "Porc mariné", prix: "20" },
        { ingredient: "Boeuf", prix: "20" },
        { ingredient: "Porc", prix: "20" },
        { ingredient: "Birria", prix: "20" },
      ],
    },
    {
      title: "Quesabirria X4",
      image: "/burrito.webp",
      description: "",
      garnitures: [
        { ingredient: "", prix: "23" },
      ],
    },
    {
      title: "Quesadilla",
      image: "/quesadilla.jpg",
      description: "Tortilla de maïs faite à la main, farcie de fromage, oignon, coriandre et viande de votre choix. Accompagné de guacamole.",
      garnitures: [
        { ingredient: "Suadero", prix: "17.50" },
        { ingredient: "Poulet", prix: "17.50" },
        { ingredient: "Champignons", prix: "17.50" },
        { ingredient: "Nopal", prix: "17.50" },
        { ingredient: "Porc mariné", prix: "17.50" },
        { ingredient: "Boeuf", prix: "17.50" },
        { ingredient: "Porc", prix: "17.50" },
        { ingredient: "Birria", prix: "17.50" },
      ],
    },
  ]

  const navigations = [
    { text: "Boisson", link: "#boissons" },
    // { text: "Boisson à la rosa", link: "#boissons" },
    { text: "Plats", link: "#plats" },
    // { text: "Plats principaux", link: "#plats" },
    { text: "Entrée", link: "#entree" },
    // { text: "Soupes", link: "#soupe" },
    // { text: "Hurgers Mexicains", link: "#hurger" },
    // { text: "Crevette", link: "#crevette" },
    // { text: "Boissons gazeuses", link: "#gaz" },
    { text: "Dessert", link: "#dessert" },
    // { text: "Café dessert", link: "#dessert" },
  ]

  return (
    <main className="bg-white">

      {/* Héro section */}
      <section className="grid grid-cols-12">
        <div className="relative w-full aspect-video col-start-1 col-end-13">

          <Image
            src="/hero.webp"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
            alt="hero section"
          />
          {/* <div className="absolute inset-x-0 translate-y-1/2 bottom-0 pt-10 flex items-center justify-center">
            <span className="bg-red-600 flex align-center items-center rounded-full px-4 h-20 text-white text-xl w-2/3">Happy hour du lundi au jeudi</span>
          </div> */}
          <div className="absolute inset-x-0 translate-y-1/2 bottom-0 pt-10 flex items-center justify-center">
            <Link href="https://eatapp.co/fr/reserve/rosa-mexicano-1477-rue-sainte-catherine-est">
              <button
                className="text-white font-bold py-4 px-8 rounded-full w-60 h-20 max-w-xs text-center"
                style={{
                  backgroundColor: "#00E5CF", // turquoise vif mexicain
                  boxShadow: "0 4px 14px rgba(0, 229, 207, 0.6)", // léger halo
                }}
              >
                Réserver
              </button>
            </Link>
          </div>

        </div>
      </section>


      {/* Réseaux sociaux */}
      {/* <section className="mt-30">
        <div className="flex w-full justify-around">
          <Link target="_blank" href="https://www.instagram.com/rosaamexicano.mtl/">
            <Instagram size={40} />
          </Link>
          <Link target="_blank" href="https://www.facebook.com/people/Restaurant-ROSA-Mexicano/61562724065284/">
            <Facebook size={40} />
          </Link>
          <Link target="_blank" href="https://www.tiktok.com/discover/rosa-mexicano-montreal">
            <FaTiktok size={40} />
          </Link>
        </div>
      </section> */}


      <section className="mt-30">
        <div className="flex w-full justify-around">
          {/* Instagram - Rose Fluo */}
          <Link
            target="_blank"
            href="https://www.instagram.com/rosaamexicano.mtl/"
            className="relative flex items-center justify-center p-2 rounded-full
        text-pink-500
        shadow-[0_0_10px_#ff4be3,0_0_20px_#ff4be3,0_0_40px_#ff4be3]
        hover:shadow-[0_0_20px_#ff4be3,0_0_40px_#ff4be3,0_0_80px_#ff4be3]"
          >
            <Instagram size={40} />
          </Link>

          {/* Facebook - Bleu Électrique */}
          <Link
            target="_blank"
            href="https://www.facebook.com/people/Restaurant-ROSA-Mexicano/61562724065284/"
            className="relative flex items-center justify-center p-2 rounded-full
        text-blue-400
        shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6,0_0_40px_#3b82f6]
        hover:shadow-[0_0_20px_#3b82f6,0_0_40px_#3b82f6,0_0_80px_#3b82f6]"
          >
            <Facebook size={40} />
          </Link>

          {/* TikTok - Vert Lime */}
          <Link
            target="_blank"
            href="https://www.tiktok.com/discover/rosa-mexicano-montreal"
            className="relative flex items-center justify-center p-2 rounded-full
        text-green-400
        shadow-[0_0_10px_#4ade80,0_0_20px_#4ade80,0_0_40px_#4ade80]
        hover:shadow-[0_0_20px_#4ade80,0_0_40px_#4ade80,0_0_80px_#4ade80]"
          >
            <FaTiktok size={40} />
          </Link>
        </div>
      </section>


      {/* Réservation */}
      {/* <section>
        <div>
          <Link href="https://eatapp.co/fr/reserve/rosa-mexicano-1477-rue-sainte-catherine-est">
            <button>
              Réserver
            </button>
          </Link>
        </div>
      </section> */}

      <section>


        <div className="pt-10 flex items-center justify-center">
          <span
            className=" text-center bg-pink-500 flex items-center justify-center rounded-full px-6 h-20 text-white text-xl w-2/3]"
            style={{ textShadow: "0 0 5px #ff4be3, 0 0 10px #ff4be3" }}
          >
            Happy hour du lundi au jeudi
          </span>
        </div>


      </section>






      {/* Navigation dans les menus */}
      <section className="grid grid-cols-12">

        <div className="flex mt-10 mb-10 col-start-2 col-end-12">
          {navigations.map((navigaiton, index) => (
            <div key={index}>
              <Nav text={navigaiton.text} link={navigaiton.link} />
            </div>
          ))}
        </div>
      </section>





      {/* Menus */}
      {recettes.map((recette, index) => (
        <div key={index} className="grid grid-cols-12 mb-12">
          {/* Contenu texte avec marges */}
          <div className="col-start-2 col-end-12">
            <Title title={recette.title} />
          </div>
          {/* Image plein écran */}
          {recette.image && (
            <div className="relative w-full aspect-video col-span-12 mt-4">
              <Image
                src={recette.image}
                alt={recette.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          )}
          <p className="col-start-2 col-end-12 mt-4 text-xl font-semibold">
            {recette.description}
          </p>

          <div className="col-start-2 col-end-12 mt-4">
            {recette.garnitures.map((item, i) => (
              <Garniture key={i} ingredient={item.ingredient} prix={item.prix} />
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </main>
  )
}


