import { useEffect, useState } from "react";
import { useCharactersDispatch } from "../context/CharactersContext";
import axios from "axios";
import toast from "react-hot-toast";
import getCharactersBasedOnQuery from "../services/getCharactersBasedOnQueryService";

const useUserSearch = () => {
  const charactersDispatch = useCharactersDispatch();
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    charactersDispatch({ type: "CHARACTERS_PENDING" });

    getCharactersBasedOnQuery(userSearch, { signal })
      .then(({ data }) =>
        charactersDispatch({
          type: "CHARACTERS_SUCCESS",
          payload: data.results,
        })
      )
      .catch((error) => {
        charactersDispatch({ type: "CHARACTERS_REJECTED" });

        toast.error(error.response.data.error);

        if (!axios.isCancel()) return;
      });

    return () => {
      controller.abort();
    };
  }, [userSearch]);

  const userSearchHandler = (e) => {
    setUserSearch(e.target.value);
  };

  return { userSearch, userSearchHandler };
};

export default useUserSearch;
