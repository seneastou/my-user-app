import React from "react";
import ProfileCard from "./ProfileCard/page";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="flex flex-col justify-center items-center h-screen bg-gray-100 space-y-4"
      style={{
        backgroundImage: "url('/image/photo.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-extrabold text-blue-800">
        Bienvenue sur ma page d'accueil
      </h1>

      <p className="font-bold text-white">
        Si vous souhaitez me contacter, n'hésitez pas à visiter ma page de
        profil !
      </p>

      <Link
        href="./profile"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Mon profil
      </Link>
    </main>
  );
}
