import Profile from "../../components/Profile/Profile"
import Experience from "../../components/Experience/Experience"
import Projets from "../../components/Projets/Projets"

import "./home.scss"

function Home() {
  return (
    <div className="home">
      
      <Profile />
      <div className="divider"></div>
      <Experience />
      <div className="divider"></div>
      <Projets />
    </div>
  );
}

export default Home;