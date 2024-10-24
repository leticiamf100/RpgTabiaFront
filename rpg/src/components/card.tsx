import "./card.css"

interface CardProps {
    recompensa: string,
    image: string
}

export function Card({recompensa, image} : CardProps){
    return(
        <div className="card">
            <img src={image} />
            <h2>{recompensa}</h2>
        </div>
    )
}