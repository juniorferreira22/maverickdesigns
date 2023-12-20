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
                <p>Junior Ferreira, com 23 anos, é designer gráfico, web-designer, web-developer desde os 21 anos, e trabalha hoje exercendo a profissão de TI na secretaria da educação de onde mora e sendo freela de web-development onde mora.<br /> <br /> Junior estuda hoje um ensino superior em Engenharia de Software online. <br /> <br /> Seus maiores objetivos envolvem se aperfeiçoar nas áreas onde atua e trabalhar nos EUA como developer front-end. </p>
            </div>
            <h1 className="aboutme__secondtitle" >QUEM ESTÁ NO MEU TIME</h1>

            <div className="images">
                <Image src="" alt=""/>
                <Image src="" alt=""/>
            </div>
            
            <h1 className="aboutme__secondtitle">O QUE EU POSSO FAZER POR VOCÊ</h1>
                <ul>
                    <li className="list-item">
                        - Landing pages;
                    </li>
                    <br />
                    <li className="list-item">
                        - Figmas;
                    </li>
                    <br />
                    <li className="list-item">
                        - Thumbnails;
                    </li>
                    <br />
                    <li className="list-item">
                        - Capas para Facebook; 
                    </li>
                    <br />
                    <li className="list-item">
                        - Artes vetoriais; 
                    </li>
                    <br />
                    <li className="list-item">
                        - Design, Web-Design e Web-Development no geral.
                    </li>
                    
                </ul>
            <h1 className="aboutme__secondtitle">COM QUE TECNOLOGIAS EU TRABALHO</h1>
            <Technologies/>
        </div>
    )
}