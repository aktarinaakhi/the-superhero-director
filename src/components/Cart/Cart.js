import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    //distructuring cart data from parent 
    const { cart } = props;
 
    // total saraly
    let totalSaray = 0;
    for (const person of cart) {
        totalSaray = totalSaray + person.salary;
    }

    return (
        <div>
            <div className="cart">
                <h4 className="pt-4"><i class="fas fa-user"></i>Developer added : {cart.length}</h4>
                <h4>Total cost : $ {totalSaray}</h4>
            </div>
            <div className="added-person">
                {
                    cart.map(person => <h4> {person.name}</h4>)
                }

            </div>
        </div>
    );
};

export default Cart;