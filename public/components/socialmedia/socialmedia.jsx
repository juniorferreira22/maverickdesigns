import linkedin from "../../assets/linkedin.svg"
import insta from "../../assets/insta.svg"
import github from "../../assets/github.svg"


import "./socialmedia.css"

export default function SocialMedia() {
    return (
        <div className="socialmedia">
            <a target="_blank" className="socialmedia__anchor" href="https://www.linkedin.com/in/junior-ferreira-037089248/">
                <img className="anchor__image" src={linkedin} alt="linkedin logo" />
            </a>

            <a target="_blank" className="socialmedia__anchor" href="https://www.instagram.com/jrferreira_001/">
                <img className="anchor__image" src={insta} alt="insta logo" />
            </a>

            <a target="_blank" className="socialmedia__anchor" href="https://github.com/juniorferreira22">
                <img className="anchor__image" src={github} alt="github logo" />
            </a>
        </div>
    )
}