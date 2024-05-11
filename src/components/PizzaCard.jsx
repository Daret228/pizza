import React, { useState } from "react";
import "./style-components.css";


function PizzaCard({ imgSrc, pizzaName, description, price }) {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className="card">
            <img
                className="card-img-top img-fluid rounded d-block"
                src={imgSrc}
                alt="pizza_card"
            />
            <div className="card-body">
                <h5 className="card-title mt-2">{pizzaName}</h5>
                <p className="card-text-description ">{description}</p>
                <select
                    className="form-select"
                    name="select"
                    aria-label="Диаметр"
                >
                    <option selected>Диаметр</option>
                    <option value="s1">10мм</option>
                    <option value="s2">20мм</option>
                    <option value="s3">30мм</option>
                </select>

                <p className="card-text-price mt-2 fs-3">
                    от <span className="price">{price}</span> ₽
                </p>

                <div
                    class="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                >
                    <div
                        class="btn-group input-block me-2"
                        role="group"
                        aria-label="First group"
                    >
                        <button type="button" class="btn btn-primary symbol" onClick={() => setQuantity(quantity - 1)}>
                            -
                        </button>
                        <input
                            type="text"
                            className="form-control input-number"
                            placeholder={quantity}
                            aria-label="Amount"
                            aria-describedby="button-addon2"
                            value={quantity}
                        />
                        <button type="button" class="btn btn-primary symbol" onClick={() => setQuantity(quantity + 1)}>
                            +
                        </button>
                    </div>

                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Third group"
                    >
                        <button type="button" class="btn btn-success <button type=" onClick={() => alert(`Количество заказанного товара: ${quantity}`)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-basket2-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaCard;
