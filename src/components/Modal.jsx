import { EyeIcon, XCircleIcon } from "@heroicons/react/24/outline";

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

            <div className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-800 p-3 transition-all duration-200 hover:bg-slate-700 md:rounded-xl">
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
                      Alive-Human
                    </span>
                  </div>
                </div>
              </div>
              <div>
                {/* <ChevronDownIcon
                onClick={() => showMenuHandler(character.id)}
                className={`h-5 w-5 text-red-600 transition-all duration-300 md:hidden ${
                  characterId === character.id ? "rotate-180" : ""
                }`}
              /> */}
                <EyeIcon className=" h-5 w-5 text-red-600 md:block" />
              </div>
            </div>

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
