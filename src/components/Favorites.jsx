import { HeartIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const [isShowModal, setIsShowModal] = useState(false);

  const favorites = useFavorites();

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <Modal onHideModal={hideModal} isShowModal={isShowModal} />
      <div onClick={showModal} className="relative sm:right-1">
        <HeartIcon className="h-8 w-8 text-red-600" />
        <span className="absolute -right-1 top-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
          {favorites.length}
        </span>
      </div>
    </>
  );
}

export default Favorites;
