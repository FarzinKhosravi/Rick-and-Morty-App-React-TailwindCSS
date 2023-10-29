import { TrashIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Character from "./CharacterList/Character";

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    created: "2017-11-04T19:09:56.428Z",
  },
];

function Modal() {
  return (
    <div className="fixed inset-0 z-20 flex h-screen items-center justify-center py-12 backdrop-blur-sm">
      <div className="no-scrollbar z-30 h-full w-11/12 overflow-y-auto rounded-lg ">
        <div className="flex flex-col rounded-lg bg-slate-900">
          <div className="sticky left-0 right-0 top-0 bg-slate-900 p-3">
            <div className="mb-1 flex items-center justify-between pb-1">
              <h2 className="text-lg font-semibold text-slate-300">
                List of Favorites
              </h2>
              <div>
                <XCircleIcon className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <hr className="mb-6 h-px border-0 bg-slate-600" />
          </div>
          <div className="flex flex-col gap-y-4 px-3 pb-3">
            {/* *** */}
            {characters.map((character) => {
              return (
                <Character character={character} key={character.id}>
                  <TrashIcon className="h-5 w-5 text-red-600" />
                </Character>
              );
            })}
            {/* *** */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

export function Backdrop() {
  return (
    <div className="fixed inset-0 block h-screen w-screen backdrop-blur-sm"></div>
  );
}
