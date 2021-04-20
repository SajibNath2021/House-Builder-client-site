import React from 'react';

const OrderListCard = ({ orderList }) => {
    return (
        <div>
            <table className="table table-striped">
                
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{orderList.name}</td>
                        <td>{orderList.addPrice}</td>
                        <td>{orderList.email}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default OrderListCard;