import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();
const FavoritesDispatcherContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("FAVORITES")) || []
  );

  return (
    <FavoritesContext.Provider value={favorites}>
      <FavoritesDispatcherContext.Provider value={setFavorites}>
        {children}
      </FavoritesDispatcherContext.Provider>
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;

export const useFavorites = () => useContext(FavoritesContext);
export const useFavoritesDispatch = () => {
  const favorites = useContext(FavoritesContext);
  const setFavorites = useContext(FavoritesDispatcherContext);

  const addFavoriteCharacter = (characters, id) => {
    const selectedFavoriteCharacter = characters.find(
      (character) => character.id === id
    );

    const favoritesData = [...favorites, selectedFavoriteCharacter];

    localStorage.setItem("FAVORITES", JSON.stringify(favoritesData));

    setFavorites(favoritesData);
  };

  const removeFavoriteCharacter = (id) => {
    // console.log("id remove :", id);

    const updatedFavorites = favorites.filter(
      (character) => character.id !== id
    );

    localStorage.setItem("FAVORITES", JSON.stringify(updatedFavorites));

    setFavorites(updatedFavorites);
  };

  return { addFavoriteCharacter, removeFavoriteCharacter };
};
