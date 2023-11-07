import Introduction from "./components/Introduction";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "./components/Providers";

function App() {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col bg-slate-900">
        <Header />
        <Introduction />
        <section className="mx-auto mb-20 w-full px-4 md:flex md:gap-x-16 xl:max-w-screen-xl">
          <CharacterList />
          <div className="hidden text-slate-100 md:block md:w-3/5">
            <CharacterDetail />
            <EpisodesList />
          </div>
        </section>
        <Footer />
        <Toaster />
      </div>
    </Providers>
  );
}

export default App;
