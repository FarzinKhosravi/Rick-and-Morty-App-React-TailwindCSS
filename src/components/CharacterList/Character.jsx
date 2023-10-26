import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Character() {
  // When the accordion menu opens >>>  rounded-b-none

  return (
    <div className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-800 p-3 transition-all duration-200 hover:bg-slate-700">
      <div className="flex gap-x-4">
        <div>
          <img
            className="block h-14 w-14 rounded-2xl"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick-img"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span>👨🏼</span>
            <span className="ml-1 text-base font-medium text-slate-300">
              Rick Sanchez
            </span>
          </div>
          <div>
            <span className="inline-block h-3 w-3 rounded-full bg-green-600"></span>
            <span className="ml-2 text-base font-normal text-slate-300">
              Alive - Human
            </span>
          </div>
        </div>
      </div>
      <div>
        <ChevronDownIcon className="h-5 w-5 text-red-600" />
      </div>
    </div>
  );
}

export default Character;
