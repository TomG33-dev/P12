import "./banner.scss"

function Banner() {
    return (
        <div className="banner">
            <h1>TOM GERARD</h1>
            <p>Développeur Web Front-End</p>
            <div className="button-container">
                <a href="https://github.com/TomG33-dev" target="_blank" rel="noopener noreferrer">
                    <button>
                        <i className="devicon-github-original"></i>
                    </button>
                </a>
                <button>
                    <i className="fa-solid fa-envelope"></i>
                </button>
            </div>
        </div>
    )
}

export default Banner