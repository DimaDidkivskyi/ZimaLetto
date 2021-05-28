import React from "react";

export const ProductList = () => {
    return (
        <div>
            <table cellspacing="0">
                <tr>
                    <th>Имя</th>
                    <th>Цена</th>
                    <th>Картинка</th>
                    <th></th>
                    <th>
                        <a href="/admin/product">Создать</a>
                    </th>
                </tr>
                <tr>
                    <td>1</td>

                    <td>
                        <a href="/admin/product/{{product[0]}}">
                            Редактировать
                        </a>
                    </td>
                    <td>
                        <a href="/admin/product/delete/{{product[0]}}">
                            Удалить
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    );
};
