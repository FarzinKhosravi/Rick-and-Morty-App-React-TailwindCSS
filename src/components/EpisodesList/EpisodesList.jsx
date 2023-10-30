import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import Episode from "./Episode";

function EpisodesList({ episodes, characterId, onSortDate, sortType }) {
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
            onClick={onSortDate}
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
