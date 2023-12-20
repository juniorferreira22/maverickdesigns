import "./contact.css"

export default function Contact() {
    return (
        <div className="containercontact">
            <div className="container__header">
                <img className="exitbutton" src="/assets/exiticon.svg" alt="exit" />
                <h1 className="container__title">Contato</h1>
            </div>

            <form action="submit" method="post">
                <input className="container__input" id="name" type="text" placeholder="Seu nome / Nome da sua empresa" />
                <input className="container__input" id="tel" type="tel" placeholder="Telefone para contato" />
                <input className="container__input" id="idea" type="text" placeholder="Detalhe ao máximo o que deseja no seu projeto de design, quanto mais detalhado, melhor." />
                <button className="submit__button" type="submit">Enviar</button>
            </form>
        </div>
    )
}