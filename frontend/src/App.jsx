import "./App.css";
import TopComments from "./components/topComments";
import AllComments from "./components/allComments";
import PlayerActivity from "./components/playerActivity";
import CourtInfo from "./components/courtInfo";
import CourtViews from "./components/courtViews";
import AllPlayers from "./components/allPlayers";

export default function App() {
  return (
    <div className="app__container">
      <CourtInfo />
      <section className="app__section">
        <TopComments/>
        <CourtViews/>
      </section>
      <PlayerActivity />
      <section className="app__section full_height">
        <AllComments />
        <AllPlayers />
      </section>
    </div>
  );
}
