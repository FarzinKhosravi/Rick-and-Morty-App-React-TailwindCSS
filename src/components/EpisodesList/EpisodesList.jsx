import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import Episode from "./Episode";
import { useEffect, useState } from "react";
import {
  useEpisodes,
  useEpisodesDispatch,
} from "../../context/EpisodesContext";
import { useCharacterId } from "../../context/CharacterIdContext";

function EpisodesList() {
  const [sortType, setSortType] = useState("earliest");
  const episodes = useEpisodes();
  const setEpisodes = useEpisodesDispatch();
  const characterId = useCharacterId();

  useEffect(() => {
    if (episodes.length) {
      switch (sortType) {
        case "earliest":
          {
            const sortedEpisodes = [...episodes].sort((a, b) => {
              return new Date(a.created) > new Date(b.created) ? 1 : -1;
            });

            setEpisodes(sortedEpisodes);
          }
          break;

        case "latest":
          {
            const sortedEpisodes = [...episodes].sort((a, b) => {
              return new Date(a.created) > new Date(b.created) ? -1 : 1;
            });

            setEpisodes(sortedEpisodes);
          }
          break;

        default:
          break;
      }
    }
  }, [sortType]);

  const sortDateHandler = () => {
    setSortType(sortType === "earliest" ? "latest" : "earliest");
  };

  if (!episodes || !characterId) return null;

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
            className={`h-6 w-6 text-red-600 transition-all duration-200 ${
              sortType === "latest" ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div>
        {episodes.map((episode, index) => {
          return <Episode index={index} key={episode.id} episode={episode} />;
        })}
      </div>
    </div>
  );
}

export default EpisodesList;
