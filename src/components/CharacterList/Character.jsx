function Character({ character, characterId, children }) {
  return (
    <div
      className={`flex cursor-pointer items-center justify-between rounded-xl bg-slate-800 p-3 transition-all duration-200 hover:bg-slate-700 md:rounded-xl ${
        characterId === character.id ? "rounded-b-none" : ""
      }`}
    >
      <div className="flex gap-x-4">
        <div>
          <img
            className="block h-14 w-14 rounded-2xl"
            src={character.image}
            alt="rick-img"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span>👨🏼</span>
            <span className="ml-1 text-base font-medium text-slate-300">
              {character.name}
            </span>
          </div>
          <div>
            <span className="inline-block h-3 w-3 rounded-full bg-green-600"></span>
            <span className="ml-2 text-base font-normal text-slate-300">
              {`${character.status} - ${character.species}`}
            </span>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Character;
