import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import Episode from "./Episode";

const episodes = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  },
  {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.916Z",
  },
];

function EpisodesList() {
  return (
    <div className="md:rounded-xl md:bg-slate-800 md:p-4">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-300">
            List of Episodes :
          </h2>
        </div>
        <div>
          <ArrowUpCircleIcon className="h-6 w-6 text-red-600" />
        </div>
      </div>
      <div>
        {episodes.map((episode) => {
          return <Episode key={episode.id} episode={episode} />;
        })}
      </div>
    </div>
  );
}

export default EpisodesList;
