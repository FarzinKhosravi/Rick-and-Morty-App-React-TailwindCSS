import { createContext, useContext, useState } from "react";

const CharacterIdContext = createContext();
const CharacterIdDispatcherContext = createContext();

function CharacterIdProvider({ children }) {
  const [characterId, setCharacterId] = useState(null);

  return (
    <CharacterIdContext.Provider value={characterId}>
      <CharacterIdDispatcherContext.Provider value={setCharacterId}>
        {children}
      </CharacterIdDispatcherContext.Provider>
    </CharacterIdContext.Provider>
  );
}

export default CharacterIdProvider;

export const useCharacterId = () => useContext(CharacterIdContext);
export const useCharacterIdDispatch = () =>
  useContext(CharacterIdDispatcherContext);
