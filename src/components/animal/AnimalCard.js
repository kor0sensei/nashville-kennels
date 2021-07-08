import React from "react"
import "./AnimalCard.css"

export const AnimalCard = (props) => (
    <section className="animal">
        <h3 className="animal__name">{props.dogName}</h3>
        <div className="animal__breed">Breed: Poodle</div>
    </section>
)