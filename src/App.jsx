import Introduction from "./components/Introduction";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Footer from "./components/Footer";
import { useEffect, useReducer } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const initialCharacters = { loading: false, data: [] };

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

function App() {
  const [characters, dispatch] = useReducer(
    charactersReducer,
    initialCharacters
  );

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        dispatch({ type: "CHARACTERS_PENDING" });

        const response = await axios.get(
          "https://rickandmortyapi.com/api/character11"
        );

        console.log(response);

        dispatch({
          type: "CHARACTERS_SUCCESS",
          payload: response.data.results,
        });
      } catch (error) {
        console.log(error);

        dispatch({ type: "CHARACTERS_REJECTED" });

        toast.error(error.response.data.error);
      }
    };

    fetchAllCharacters();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header characters={characters} />
      <Introduction />
      <section className="mx-auto mb-20 px-4 md:flex md:gap-x-16 2xl:max-w-screen-2xl">
        <CharacterList characters={characters} />
        <div className="hidden text-slate-100 md:block md:w-3/5">
          <CharacterDetail />
          <EpisodesList />
        </div>
      </section>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
