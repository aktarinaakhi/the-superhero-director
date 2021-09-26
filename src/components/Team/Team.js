import React from 'react';
import "./Team.css"

const Team = (props) => {
    const { name, img, age, country, role, salary } = props.person;
    return (
        <div className="team-details p-4">
            <img height="150" className="rounded-circle" src={img} alt="" />
            <h5 className="text-light mt-3"> Name : {name}</h5>
            <h5 className="text-light"> Role : {role}</h5>
            <h5 className="text-light"> Age : {age}</h5>
            <h5 className="text-light"> Country : {country}</h5>
            <h5 className="text-light"> Salary : $ {salary}</h5>
            <button
                onClick={() => props.handleAddToCart(props.person)}
                className="bg-danger text-light addToCart my-2">
                <i class="fas fa-cart-plus"></i>
                Add To Cart</button>
            <div>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-linkedin"></i>
            </div>
        </div>
    );
};

export default Team;