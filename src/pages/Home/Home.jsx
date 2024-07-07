import Profile from "../../components/Profile/Profile"
import Experience from "../../components/Experience/Experience"
import Projets from "../../components/Projets/Projets"
import Contact from "../../components/Contact/Contact"

import "./home.scss"

function Home() {
  return (
    <div className="home">
      
      <Profile />
      <div className="divider"></div>
      <Experience />
      <div className="divider"></div>
      <Projets />
      <div className="divider"></div>
      <Contact />
    </div>
  );
}

export default Home;