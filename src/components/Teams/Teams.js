import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import "./Teams.css"

const Teams = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch('./person.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    const handleAddToCart = person => {
        console.log(person.name);
    }

    return (
        <div className="teams-container container mt-4">
            <div className="team-container">
                {
                    persons.map(person => <Team
                        key={person.key}
                        person={person}
                        handleAddToCart={handleAddToCart}
                    >
                    </Team>)
                }

            </div>
            <div className="cart-container">
                <h4 className="pt-4"><i class="fas fa-user"></i>Developer added : 0</h4>
                <h4>Total cost : $ 0</h4>
            </div>
            <div className="added-person">

            </div>

        </div>
    );
};

export default Teams;