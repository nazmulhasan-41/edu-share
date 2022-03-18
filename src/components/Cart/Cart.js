import React from 'react';
import './Cart.css';

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
            <div> Course Enrolled: {cart.length}</div>

            


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course ID</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>

                {
                cart.map(x=>

                    <tr>
                        <th scope="row">{parseInt(x.index)+1 }</th>
                        <td>{x.coursename}</td>
                        <td>{parseInt(x.cost.replace('$', '').replace(',', ''))}</td>
                        
                    </tr>
                    
                    
                    )
                }
                <tr className='totalClass'>
                        <th scope="col"></th>
                        <td>Total Cost:</td>
                        <td>{total}</td>
                        
                    </tr>

                    
                </tbody>
            </table>


              </div>
    );
};

export default Cart;