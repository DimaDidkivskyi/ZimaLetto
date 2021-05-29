import React from "react";

import { HeaderAdmin } from "../components/HeaderAdmin";

export const EditOrders = () => {
    return (
        <div>
            <HeaderAdmin />
            <table cellspacing="0">
                <tr>
                    <th>Имя</th>
                    <th>Цена</th>
                    <th>Картинка</th>
                </tr>
            </table>
        </div>
    );
};
