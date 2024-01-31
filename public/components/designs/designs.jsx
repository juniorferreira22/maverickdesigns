import { useState } from "react"
import "./designs.css"
import button from "./assets/button.svg"
export default function Designs(props){

    // const[container,setContainer] = useState()

    return(
       <>
                <button id="previous" className="container__button" onClick="">
                    <img src={button} alt="previous" />
                </button>

                <div className="container">
                    
                    <img 
                        src={props.image1} 
                        alt={props.alt1} 
                        className="container__image"
                        id="image1" 
                    />

                    <h1 className="container__title">
                        {props.title}
                    </h1>

                    <p className="container__description">
                        {props.descp}
                    </p>

                    <img 
                        src={props.image2} 
                        alt={props.alt2} 
                        className="container__image" 
                        id="image2"
                    />

                </div>
            <button id="next" className="container__button"  onClick="">
                <img src={button} alt="next" />
            </button>
        </>
    )
}