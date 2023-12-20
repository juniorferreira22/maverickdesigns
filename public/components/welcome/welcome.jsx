
import "./welcome.css"
export default function Welcome() {
    return (
        <div className="welcoming__container">
            <div className="nave"></div>
            <div className="welcoming">
                <p>A IDENTIDADE QUE SUA EMPRESA MERECE.</p>
            </div>

            <div className="godown">
                <img className="godown__img" src="/assets/godown.svg" alt="ir para baixo" />
            </div>
        </div>
    )
}