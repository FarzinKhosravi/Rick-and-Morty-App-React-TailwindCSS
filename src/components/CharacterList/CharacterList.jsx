import Character from "./Character";
import CharacterDetail from "./../CharacterDetail";
import EpisodesList from "../EpisodesList/EpisodesList";
import { useState } from "react";
import { ChevronDownIcon, EyeIcon } from "@heroicons/react/24/outline";

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    created: "2017-11-04T19:09:56.428Z",
  },
];

function CharacterList() {
  const [characterId, setCharacterId] = useState(null);

  const showMenuHandler = (id) => {
    console.log("clicked !!", id);

    setCharacterId(characterId === id ? null : id);
  };

  return (
    <div className="md:w-2/5">
      <div className="flex">
        <h2 className="mb-4 text-xl font-semibold text-slate-300">
          List of Characters :
        </h2>
        <div className="-mt-3 ml-3 flex items-center justify-center sm:hidden">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-xs text-white">
            3
          </span>
        </div>
      </div>
      <div>
        {characters.map((character) => {
          return (
            <div className="mb-4 last:mb-0" key={character.id}>
              <Character character={character} characterId={characterId}>
                <ChevronDownIcon
                  onClick={() => showMenuHandler(character.id)}
                  className={`h-5 w-5 text-red-600 transition-all duration-300 md:hidden ${
                    characterId === character.id ? "rotate-180" : ""
                  }`}
                />
                <EyeIcon className="hidden h-5 w-5 text-red-600 md:block" />
              </Character>
              <div
                className={`rounded-b-xl bg-slate-800 px-3 md:hidden ${
                  character.id === characterId
                    ? "min-h-screen py-4 opacity-100 transition-all "
                    : "max-h-0 overflow-hidden opacity-0 transition-all duration-300"
                }`}
              >
                <CharacterDetail />
                <EpisodesList />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
