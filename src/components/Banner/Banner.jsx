import "./banner.scss"

function Banner() {
    return (
        <div className="banner">
            <h1>TOM GERARD</h1>
            <p>Développeur Web Front-End</p>
            <div className="button-container">
                <button>
                    <i class="devicon-github-original"></i>
                </button>
                <button>
                    <i class="fa-solid fa-envelope"></i>
                </button>
            </div>
        </div>
    )
}

export default Banner