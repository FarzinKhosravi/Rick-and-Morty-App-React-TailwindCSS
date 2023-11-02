import { useCharacterDetailDispatch } from "../context/CharacterDetailContext";
import {
  useCharacterId,
  useCharacterIdDispatch,
} from "../context/CharacterIdContext";
import { useEpisodesDispatch } from "../context/EpisodesContext";
import toast from "react-hot-toast";
import getCharacter from "../services/getCharacterService";
import getEpisodesList from "../services/getEpisodesListService";

function useFetchCharacterData() {
  const characterDetailDispatch = useCharacterDetailDispatch();
  const setEpisodes = useEpisodesDispatch();
  const setCharacterId = useCharacterIdDispatch();
  const characterId = useCharacterId();

  const showCharacterDataHandler = (id) => {
    const fetchCharacterData = async (id) => {
      try {
        characterDetailDispatch({ type: "CHARACTER_DETAIL_PENDING" });

        const { data } = await getCharacter(id);

        const episodesIdList = data.episode.map((episode) => {
          return episode.split("/").at(-1);
        });

        const { data: episodesList } = await getEpisodesList(episodesIdList);

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
        characterDetailDispatch({ type: "CHARACTER_DETAIL_REJECTED" });

        toast.error(error.response.data.error);
      }
    };

    setCharacterId(characterId === id ? null : id);

    fetchCharacterData(id);
  };

  return showCharacterDataHandler;
}

export default useFetchCharacterData;
