import React from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import cartEmpty from "../assets/img/empty-cart.svg";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Кошик порожній
      </h2>
      <p>
      Найімовірніше, ви не замовляли ще нiчого.
        <br />
        Щоб замовити, перейди на головну сторінку.
      </p>
      <img src={cartEmpty} alt="Empty cart" />
      <Link to="react-food/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
