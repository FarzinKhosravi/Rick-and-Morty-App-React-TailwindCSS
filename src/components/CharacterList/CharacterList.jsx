import Character from "./Character";
import CharacterDetail from "./../CharacterDetail";
import EpisodesList from "../EpisodesList/EpisodesList";
import { useState } from "react";

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
    <div>
      <h2 className="mb-4 text-xl font-semibold text-slate-300">
        List of Characters :
      </h2>
      <div>
        {characters.map((character) => {
          return (
            <div className="mb-4 last:mb-0" key={character.id}>
              <Character
                showMenuHandler={showMenuHandler}
                character={character}
                characterId={characterId}
              />
              <div
                className={`rounded-b-xl bg-slate-800 px-3 py-4 ${
                  character.id === characterId ? "block" : "hidden"
                }`}
              >
                <CharacterDetail character={character} />
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
