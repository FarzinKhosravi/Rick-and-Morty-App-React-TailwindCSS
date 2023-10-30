function Episode({ episode, index }) {
  return (
    <div className="mb-8 flex justify-between">
      <div className="">
        <span className="mb-3 block w-full font-normal text-slate-300">
          {String(index + 1).padStart(2, "0")} - {episode.episode} :
          <span className="font-bold">{episode.name}</span>
        </span>
        <span className="rounded-3xl bg-slate-600 px-3 py-1 text-sm font-semibold text-slate-300 xs:hidden">
          {episode.air_date}
        </span>
      </div>
      <div className="hidden text-center xs:block">
        <span className="block w-full rounded-3xl bg-slate-600 p-1 px-3 text-sm font-semibold text-slate-300">
          {episode.air_date}
        </span>
      </div>
    </div>
  );
}

export default Episode;
