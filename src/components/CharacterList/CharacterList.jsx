import Character from "./Character";
import CharacterDetail from "./../CharacterDetail";
import EpisodesList from "../EpisodesList/EpisodesList";
import {
  ChevronDownIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import Loader from "./../Loader";
import { useCharacters } from "../../context/CharactersContext";
import { useCharacterId } from "../../context/CharacterIdContext";
import useFetchAllCharacters from "../../hooks/useFetchAllCharacters";
import useFetchCharacterData from "../../hooks/useFetchCharacterData";

function CharacterList() {
  const { loading, characters } = useCharacters();
  const characterId = useCharacterId();
  const showCharacterDataHandler = useFetchCharacterData();
  useFetchAllCharacters();

  function renderCharactersList() {
    return loading ? (
      <Loader />
    ) : (
      characters.map((character) => {
        return (
          <div className="mb-4 last:mb-0" key={character.id}>
            <Character character={character}>
              <ChevronDownIcon
                onClick={() => showCharacterDataHandler(character.id)}
                className={`h-5 w-5 text-red-600 transition-all duration-300 md:hidden ${
                  characterId === character.id ? "rotate-180" : ""
                }`}
              />
              {characterId === character.id ? (
                <EyeSlashIcon
                  onClick={() => showCharacterDataHandler(character.id)}
                  className="hidden h-5 w-5 text-red-600 md:block"
                />
              ) : (
                <EyeIcon
                  onClick={() => showCharacterDataHandler(character.id)}
                  className="hidden h-5 w-5 text-red-600 md:block"
                />
              )}
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
      })
    );
  }

  return (
    <div className="md:w-2/5">
      <div className="flex">
        <h2 className="mb-4 text-xl font-semibold text-slate-300">
          List of Characters :
        </h2>
        <div className="-mt-3 ml-3 flex items-center justify-center sm:hidden">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-xs text-white">
            {characters.length}
          </span>
        </div>
      </div>
      <div>{renderCharactersList()}</div>
    </div>
  );
}

export default CharacterList;
