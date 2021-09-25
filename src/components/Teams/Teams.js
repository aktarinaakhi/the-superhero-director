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

    return (
        <div className="teams-container">
            <div className="team-container">
                {/* <h1> Name : {persons.length}</h1> */}
                {
                    persons.map(person => <Team
                        key={person.key}
                        person={person}
                    >
                    </Team>)
                }

            </div>
            <div className="cart-container">

                <h1>Cart-name</h1>


            </div>

        </div>
    );
};

export default Teams;