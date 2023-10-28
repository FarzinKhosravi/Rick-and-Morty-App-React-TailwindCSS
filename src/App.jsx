import Introduction from "./components/Introduction";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Footer from "./components/Footer";

function App() {
  const characters = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      created: "2017-11-04T19:09:56.428Z",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Introduction />
      <section className="mb-10 px-4 md:flex md:gap-x-16">
        <CharacterList characters={characters} />
        <div className="hidden md:block md:flex-auto">
          <CharacterDetail />
          <EpisodesList />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
