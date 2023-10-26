function Episode({ episode }) {
  return (
    <div className="mb-8 flex justify-between">
      <div className="">
        <span className="mb-3 block w-full font-normal text-slate-300">
          01 - {episode.episode} :
          <span className="font-bold">{episode.name}</span>
        </span>
        <span className="xs:hidden rounded-3xl bg-slate-600 px-3 py-1 text-sm font-semibold text-slate-300">
          {episode.air_date}
        </span>
      </div>
      <div className="xs:block hidden text-center">
        <span className="block w-full rounded-3xl bg-slate-600 p-1 px-3 text-sm font-semibold text-slate-300">
          {episode.air_date}
        </span>
      </div>
    </div>
  );
}

export default Episode;
