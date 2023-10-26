import Introduction from "./components/Introduction";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Introduction />
      <section className="px-4">
        <CharacterList />
      </section>
    </div>
  );
}

export default App;
