import Character from "./Character";
import CharacterDetail from "./../CharacterDetail";
import EpisodesList from "../EpisodesList/EpisodesList";
import {
  ChevronDownIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import Loader from "./../Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {
  useCharacters,
  useCharactersDispatch,
} from "../../context/CharactersContext";
import { useCharacterDetailDispatch } from "../../context/CharacterDetailContext";
import { useEpisodesDispatch } from "../../context/EpisodesContext";
import {
  useCharacterId,
  useCharacterIdDispatch,
} from "../../context/CharacterIdContext";

function CharacterList() {
  const { loading, characters } = useCharacters();
  const charactersDispatch = useCharactersDispatch();
  const characterDetailDispatch = useCharacterDetailDispatch();
  const setEpisodes = useEpisodesDispatch();
  const characterId = useCharacterId();
  const setCharacterId = useCharacterIdDispatch();

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        charactersDispatch({ type: "CHARACTERS_PENDING" });

        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        charactersDispatch({
          type: "CHARACTERS_SUCCESS",
          payload: data.results,
        });
      } catch (error) {
        charactersDispatch({ type: "CHARACTERS_REJECTED" });

        toast.error(error.response.data.error);
      }
    };

    fetchAllCharacters();
  }, []);

  const showCharacterDetailHandler = (id) => {
    const fetchCharacterData = async (id) => {
      try {
        characterDetailDispatch({ type: "CHARACTER_DETAIL_PENDING" });

        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );

        const episodesIdList = data.episode.map((episode) => {
          return episode.split("/").at(-1);
        });

        const { data: episodesList } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesIdList.slice(
            0,
            3
          )}`
        );

        characterDetailDispatch({
          type: "CHARACTER_DETAIL_SUCCESS",
          payload: data,
        });

        const episodesArray = [episodesList].flat();

        const sortedEpisodes = [...episodesArray].sort((a, b) => {
          return new Date(a.created) > new Date(b.created) ? 1 : -1;
        });

        setEpisodes(sortedEpisodes);
      } catch (error) {
        console.log(error);

        characterDetailDispatch({ type: "CHARACTER_DETAIL_REJECTED" });

        toast.error(error.response.data.error);
      }
    };

    setCharacterId(characterId === id ? null : id);

    fetchCharacterData(id);
  };

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
      <div>
        {loading ? (
          <Loader />
        ) : (
          characters.map((character) => {
            return (
              <div className="mb-4 last:mb-0" key={character.id}>
                <Character character={character} characterId={characterId}>
                  <ChevronDownIcon
                    onClick={() => showCharacterDetailHandler(character.id)}
                    className={`h-5 w-5 text-red-600 transition-all duration-300 md:hidden ${
                      characterId === character.id ? "rotate-180" : ""
                    }`}
                  />
                  {characterId === character.id ? (
                    <EyeSlashIcon
                      onClick={() => showCharacterDetailHandler(character.id)}
                      className="hidden h-5 w-5 text-red-600 md:block"
                    />
                  ) : (
                    <EyeIcon
                      onClick={() => showCharacterDetailHandler(character.id)}
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
                  <CharacterDetail characterId={characterId} />
                  <EpisodesList characterId={characterId} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CharacterList;
