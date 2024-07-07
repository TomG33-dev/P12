import "./banner.scss"
import React from 'react'

function Banner() {
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                <a href="#contact" onClick={scrollToContact}>
                    <button>
                        <i className="fa-solid fa-envelope"></i>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Banner