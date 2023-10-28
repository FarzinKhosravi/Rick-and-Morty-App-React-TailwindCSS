import { HeartIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";

function Favorites() {
  return (
    <>
      <Modal />
      <div className="relative sm:right-1">
        <HeartIcon className="h-8 w-8 text-red-600" />
        <span className="absolute -right-1 top-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
          3
        </span>
      </div>
    </>
  );
}

export default Favorites;
