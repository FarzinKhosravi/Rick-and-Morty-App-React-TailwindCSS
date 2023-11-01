import CharacterDetailProvider from "../context/CharacterDetailContext";
import CharacterIdProvider from "../context/CharacterIdContext";
import CharactersProvider from "../context/CharactersContext";
import EpisodesProvider from "../context/EpisodesContext";
import FavoritesProvider from "../context/FavoritesContext";

function Providers({ children }) {
  return (
    <CharactersProvider>
      <CharacterDetailProvider>
        <FavoritesProvider>
          <EpisodesProvider>
            <CharacterIdProvider>{children}</CharacterIdProvider>
          </EpisodesProvider>
        </FavoritesProvider>
      </CharacterDetailProvider>
    </CharactersProvider>
  );
}

export default Providers;
