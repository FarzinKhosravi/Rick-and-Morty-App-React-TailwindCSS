import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useCharactersDispatch } from "../context/CharactersContext";

function useFetchAllCharacters() {
  const charactersDispatch = useCharactersDispatch();

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        charactersDispatch({ type: "CHARACTERS_PENDING" });

        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        charactersDispatch({
          type: "CHARACTERS_SUCCESS",
          payload: data.results,
        });
      } catch (error) {
        charactersDispatch({ type: "CHARACTERS_REJECTED" });

        toast.error(error.response.data.error);
      }
    };

    fetchAllCharacters();
  }, []);
}

export default useFetchAllCharacters;
