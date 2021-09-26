import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let totalSaray = 0;
    // const person = '';
    for (const person of cart) {
        totalSaray = totalSaray + person.salary;
        // const name = person.name;
        // console.log(name);
    }
    return (
        <div>
            <div className="cart">
                <h4 className="pt-4"><i class="fas fa-user"></i>Developer added : {cart.length}</h4>
                <h4>Total cost : $ {totalSaray}</h4>
            </div>
            <div>
                {/* <h4>Added person : {person.name}</h4> */}
            </div>
        </div>
    );
};

export default Cart;