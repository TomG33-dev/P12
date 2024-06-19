import "./experience.scss"

function Experience() {
    return (
        <div className="experience">
            <h1>EXPÉRIENCE</h1>
            <div className="experience-flex">
                <div className="experience-container">
                    <h2>FRONT-END</h2>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-html5-plain-wordmark colored"></i>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                    <i className="devicon-sass-original colored"></i>
                </div>

                <div className="experience-container">
                    <h2>BACK-END</h2>
                    <i className="devicon-mongodb-plain-wordmark colored"></i>
                    <i className="devicon-swagger-plain colored"></i>
                </div>

                <div className="experience-container">
                    <h2>LANGAGES</h2>
                    <i className="devicon-javascript-plain colored"></i>
                </div>

                <div className="experience-container">
                    <h2>OUTILS</h2>
                    <i className="devicon-vscode-plain-wordmark colored"></i>
                    <i className="devicon-github-original-wordmark colored"></i>
                </div>
            </div>
        </div>
    )
}

export default Experience