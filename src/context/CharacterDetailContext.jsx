import { createContext, useContext, useReducer } from "react";

const CharacterDetailContext = createContext();
const CharacterDetailDispatcherContext = createContext();

const initialCharacterDetail = { loading: false, characterDetail: null };

const characterDetailReducer = (state, action) => {
  switch (action.type) {
    case "CHARACTER_DETAIL_PENDING":
      return { loading: true, characterDetail: null };

    case "CHARACTER_DETAIL_SUCCESS":
      return { loading: false, characterDetail: action.payload };

    case "CHARACTER_DETAIL_REJECTED":
      return { loading: false, characterDetail: null };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

function CharacterDetailProvider({ children }) {
  const [characterDetail, characterDetailDispatch] = useReducer(
    characterDetailReducer,
    initialCharacterDetail
  );

  return (
    <CharacterDetailContext.Provider value={characterDetail}>
      <CharacterDetailDispatcherContext.Provider
        value={characterDetailDispatch}
      >
        {children}
      </CharacterDetailDispatcherContext.Provider>
    </CharacterDetailContext.Provider>
  );
}

export default CharacterDetailProvider;

export const useCharacterDetail = () => useContext(CharacterDetailContext);
export const useCharacterDetailDispatch = () =>
  useContext(CharacterDetailDispatcherContext);
