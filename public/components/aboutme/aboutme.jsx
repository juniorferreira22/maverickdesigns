import "./aboutme.css"
import Image from "./innercomponents/images/image"
import Technologies from "./innercomponents/technologies/technologies"
import Welcome from "../welcome/welcome"

export default function AboutMe() {

    return (
        <div className="aboutme">
            <h1 className="aboutme__title" >SOBRE JUNIOR FERREIRA</h1>
            <div className="aboutme__firstsession">
                <img className="aboutme__image" src="" alt="" />
                <p>xxxxxxxxxxxx xxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
                    xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx x
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <h1 className="aboutme__secondtitle" >QUEM ESTÁ NO MEU TIME</h1>

            <div className="images">
                <Image src="" alt=""/>
                <Image src="" alt=""/>
            </div>
            
            <h1 className="aboutme__secondtitle">O QUE EU POSSO FAZER POR VOCÊ</h1>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
                xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxx xxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
                xxxxxxxxxxxxxxxxxx xxxxxx xxxxxxxxxxxxx xxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxx 
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxx 
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <h1 className="aboutme__secondtitle">COM QUE TECNOLOGIAS EU TRABALHO</h1>
            <Technologies/>
        </div>
    )
}