function CharacterDetail({ character }) {
  return (
    <div className="mb-8">
      <div className="hidden">
        <img
          className="block h-14 w-14 rounded-2xl"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick-img"
        />
      </div>
      <div className="flex flex-col">
        <div className="mb-4 flex flex-col">
          <div className="mb-1">
            <span>👨🏼</span>
            <span className="ml-1 text-sm font-medium text-slate-300">
              {character.name}
            </span>
          </div>
          <div>
            <span className="inline-block h-3 w-3 rounded-full bg-green-600"></span>
            <span className="ml-2 text-sm font-normal text-slate-300">
              {`${character.status} - ${character.species}`}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1">
            <span className="block text-sm text-slate-500">
              Last known location:
            </span>
          </div>
          <div className="mb-5">
            <span className="block text-sm font-medium text-slate-300">
              {character.location.name}
            </span>
          </div>
          <div>
            <button className="inline-flex cursor-pointer items-center justify-center rounded-3xl bg-slate-500 px-3 py-2 text-sm font-medium text-slate-100 transition-all duration-200 hover:bg-slate-700">
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
