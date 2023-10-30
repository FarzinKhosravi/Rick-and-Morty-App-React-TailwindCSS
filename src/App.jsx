import Introduction from "./components/Introduction";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Footer from "./components/Footer";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const initialCharacters = { loading: false, data: [] };

const initialCharacterDetail = { loading: false, data: null };

const charactersReducer = (state, action) => {
  switch (action.type) {
    case "CHARACTERS_PENDING":
      return { loading: true, data: [] };

    case "CHARACTERS_SUCCESS":
      return { loading: false, data: [...action.payload.slice(0, 8)] };

    case "CHARACTERS_REJECTED":
      return { loading: false, data: [] };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

const characterDetailReducer = (state, action) => {
  switch (action.type) {
    case "CHARACTER_DETAIL_PENDING":
      return { loading: true, data: null };

    case "CHARACTER_DETAIL_SUCCESS":
      return { loading: false, data: action.payload };

    case "CHARACTER_DETAIL_REJECTED":
      return { loading: false, data: null };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

function App() {
  const [characterId, setCharacterId] = useState(null);

  const [episodes, setEpisodes] = useState(null);

  const [characters, charactersDispatch] = useReducer(
    charactersReducer,
    initialCharacters
  );

  const [characterDetail, characterDetailDispatch] = useReducer(
    characterDetailReducer,
    initialCharacterDetail
  );

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        charactersDispatch({ type: "CHARACTERS_PENDING" });

        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        console.log(response);

        charactersDispatch({
          type: "CHARACTERS_SUCCESS",
          payload: response.data.results,
        });
      } catch (error) {
        console.log(error);

        charactersDispatch({ type: "CHARACTERS_REJECTED" });

        toast.error(error.response.data.error);
      }
    };

    fetchAllCharacters();
  }, []);

  const showCharacterDetailHandler = (id) => {
    console.log("clicked !!", id);

    const fetchCharacterData = async (id) => {
      try {
        characterDetailDispatch({ type: "CHARACTER_DETAIL_PENDING" });

        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );

        const episodesIdList = data.episode.map((episode) => {
          return episode.split("/").at(-1);
        });

        const { data: episodesList } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesIdList.slice(
            0,
            3
          )}`
        );

        characterDetailDispatch({
          type: "CHARACTER_DETAIL_SUCCESS",
          payload: data,
        });

        setEpisodes([episodesList].flat());
      } catch (error) {
        console.log(error);

        characterDetailDispatch({ type: "CHARACTER_DETAIL_REJECTED" });

        toast.error(error.response.data.error);
      }
    };

    setCharacterId(characterId === id ? null : id);

    fetchCharacterData(id);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header characters={characters} />
      <Introduction />
      <section className="mx-auto mb-20 px-4 md:flex md:gap-x-16 2xl:max-w-screen-2xl">
        <CharacterList
          characterId={characterId}
          characters={characters}
          onShowCharacterDetail={showCharacterDetailHandler}
          characterDetail={characterDetail}
          episodes={episodes}
        />
        <div className="hidden text-slate-100 md:block md:w-3/5">
          <CharacterDetail
            characterId={characterId}
            characterDetail={characterDetail}
          />
          <EpisodesList episodes={episodes} characterId={characterId} />
        </div>
      </section>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
