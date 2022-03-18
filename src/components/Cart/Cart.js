import React from 'react';

const Cart = (props) => {
    let cart = props.cart;
    let total = 0;
    //    newStr = str.replace('c', '');

    for (let i = 0; i < cart.length; i++) {
        total = total + parseInt(cart[i].cost.replace('$', '').replace(',', ''));
    }

    return (
        <div>
            <h3>Course Enrolled Summary</h3>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course ID</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        
                    </tr>

                </tbody>
            </table>


            <div> Course Enrolled: {cart.length}</div>
            <div>Total Cost: {total}</div>

        </div>
    );
};

export default Cart;