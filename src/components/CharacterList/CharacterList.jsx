import Character from "./Character";
import CharacterDetail from "./../CharacterDetail";
import EpisodesList from "../EpisodesList/EpisodesList";
import { useState } from "react";

function CharacterList({ characters }) {
  const [characterId, setCharacterId] = useState(null);

  const showMenuHandler = (id) => {
    console.log("clicked !!", id);

    setCharacterId(characterId === id ? null : id);
  };

  return (
    <div className="md:flex-auto">
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
              <Character
                showMenuHandler={showMenuHandler}
                character={character}
                characterId={characterId}
              />
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
