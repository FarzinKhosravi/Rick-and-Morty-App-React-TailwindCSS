import { useEffect } from "react";
import toast from "react-hot-toast";
import { useCharactersDispatch } from "../context/CharactersContext";
import getAllCharacters from "../services/getAllCharactersService";

function useFetchAllCharacters() {
  const charactersDispatch = useCharactersDispatch();

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        charactersDispatch({ type: "CHARACTERS_PENDING" });

        const { data } = await getAllCharacters();
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
