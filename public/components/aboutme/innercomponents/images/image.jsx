import "./image.css"
export default function Image(props){
    return(
        <>
            <img className="images__image" src={props.src} alt={props.alt} />
        </>
    )
}