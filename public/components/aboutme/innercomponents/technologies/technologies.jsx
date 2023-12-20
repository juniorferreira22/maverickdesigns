import css3 from "../../../../assets/css3.svg"
import figma from "../../../../assets/figma.svg"
import html5 from "../../../../assets/html5.svg"
import js from "../../../../assets/js.svg"
import reactjs from "../../../../assets/reactjs.svg"
import photoshop from "../../../../assets/ps.svg"
import python3 from "../../../../assets/py.svg"
import illustrator from "../../../../assets/illustrator.svg"
import "./technologies.css"

export default function Technologies(){
    return(
        <div className="techs">
            <div className="webdev__techs">
                <img className="techs__image" src={html5} alt="HTML5" />
                <img className="techs__image" src={css3} alt="CSS3" />
                <img className="techs__image" src={js} alt="JavaScript" />
                <img className="techs__image" src={reactjs} alt="ReactJS" />

            </div>

            <div className="design__techs">
                <img className="techs__image" src={python3} alt="Python3" />
                <img className="techs__image" src={figma} alt="Figma" />
                <img className="techs__image" src={photoshop} alt="" />
                <img className="techs__image" src={illustrator} alt="" />
            </div>
        </div>
    )
}