import "./projets.scss"
import SophieBluel from '../../assets/sophiebluel.png';
import NinaCarducci from '../../assets/ninacarducci.png';

function Projets() {
    return (
        <div className="projets">
            <h1>PROJETS OPENCLASSROOMS</h1>
            <div className="project">
                <div className="project-text">
                    <h2>SOPHIE BLUEL</h2>
                    <p>Description de Sophie Bluel</p>
                    <button>En savoir plus</button>
                </div>
                <img src={SophieBluel} alt="Image du site de Sophie Bluel" />
            </div>
            <div className="project reverse">
                <div className="project-text">
                    <h2>NINA CARDUCCI</h2>
                    <p>Description de Nina Carducci</p>
                    <button>En savoir plus</button>
                </div>
                <img src={NinaCarducci} alt="Image du site de Nina Carducci" />
            </div>
        </div>
    )
}

export default Projets