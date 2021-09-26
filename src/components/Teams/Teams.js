import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Team from '../Team/Team';
import "./Teams.css"

const Teams = () => {
    const [persons, setPersons] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./person.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    const handleAddToCart = person => {
        const newCart = [...cart, person];
        setCart(newCart);
        // console.log(newCart, cart);
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
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Teams;