import { useCharacterDetail } from "../context/CharacterDetailContext";
import { useCharacterId } from "../context/CharacterIdContext";
import { useCharacters } from "../context/CharactersContext";
import {
  useFavorites,
  useFavoritesDispatch,
} from "../context/FavoritesContext";
import Loader from "./Loader";

function CharacterDetail() {
  const { loading, characterDetail } = useCharacterDetail();
  const { characters } = useCharacters();
  const favorites = useFavorites();
  const { addFavoriteCharacter } = useFavoritesDispatch();
  const characterId = useCharacterId();

  if (!characterDetail || !characterId)
    return (
      <div className="hidden md:block">
        <span className="text-lg font-black italic">
          Please Select a Character
        </span>
        &nbsp;
        <span className="text-xl">😊</span>
      </div>
    );

  if (loading) return <Loader />;

  return (
    <div className="mb-8 ">
      <h2 className="mb-4 text-xl font-semibold text-slate-300">
        Character Detail :
      </h2>
      <div className="md:flex md:overflow-hidden md:rounded-xl md:bg-slate-800">
        <div className="hidden w-full md:block md:max-w-52">
          <img
            className="block h-14 w-14 rounded-2xl md:h-full md:w-full md:rounded-none"
            src={characterDetail.image}
            alt={characterDetail.name}
          />
        </div>
        <div className="flex flex-col md:ml-4 md:w-full md:py-4">
          <div className="mb-4 flex flex-col">
            <div className="mb-1">
              <span className="md:text-lg">
                {characterDetail.gender === "Male" ? "👨🏼" : "👱🏼‍♀️"}
              </span>
              <span className="ml-1 text-sm font-medium text-slate-300 md:text-lg md:font-semibold">
                {characterDetail.name}
              </span>
            </div>
            <div>
              <span
                className={`inline-block h-3 w-3 rounded-full ${
                  characterDetail.status === "Alive"
                    ? "bg-green-600"
                    : characterDetail.status === "Dead"
                    ? "bg-red-600"
                    : "bg-yellow-400"
                }`}
              ></span>
              <span className="ml-2 text-sm font-normal text-slate-300 md:text-base">
                {`${characterDetail.status} - ${characterDetail.species}`}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-1">
              <span className="block text-sm text-slate-500 md:text-base">
                Last known location:
              </span>
            </div>
            <div className="mb-5">
              <span className="block text-sm font-medium text-slate-300 md:text-base md:font-semibold">
                {characterDetail.location.name}
              </span>
            </div>
            <div>
              {favorites.find(
                (favorite) => favorite.id === characterDetail.id
              ) ? (
                <div className="text-sm font-semibold text-slate-300">
                  Already Added To Favorites 😎
                </div>
              ) : (
                <button
                  onClick={() => addFavoriteCharacter(characters, characterId)}
                  className="inline-flex cursor-pointer items-center justify-center rounded-3xl bg-slate-500 px-3 py-2 text-sm font-medium text-slate-100 transition-all duration-200 hover:bg-slate-700 md:px-4 md:text-base md:font-semibold"
                >
                  Add to Favorite
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
