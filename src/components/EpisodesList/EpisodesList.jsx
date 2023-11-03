import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import Episode from "./Episode";
import { useEpisodes } from "../../context/EpisodesContext";
import { useCharacterId } from "../../context/CharacterIdContext";
import useSortEpisodes from "../../hooks/useSortEpisodes";
import { useCharacterDetail } from "../../context/CharacterDetailContext";

function EpisodesList() {
  const episodes = useEpisodes();
  const characterId = useCharacterId();
  const { sortType, sortDateHandler } = useSortEpisodes();
  const { characterDetail } = useCharacterDetail();

  if (!episodes || !characterId || !characterDetail) return null;

  function renderEpisodesList() {
    return episodes.map((episode, index) => {
      return <Episode index={index} key={episode.id} episode={episode} />;
    });
  }

  return (
    <div className="md:rounded-xl md:bg-slate-800 md:p-4">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-300">
            List of Episodes :
          </h2>
        </div>
        <div>
          <ArrowUpCircleIcon
            onClick={sortDateHandler}
            className={`h-6 w-6 cursor-pointer text-red-600 transition-all duration-200 ${
              sortType === "latest" ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div>{renderEpisodesList()}</div>
    </div>
  );
}

export default EpisodesList;
