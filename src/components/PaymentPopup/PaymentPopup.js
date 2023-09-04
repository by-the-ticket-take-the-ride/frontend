import React from "react";
import Button from "../Buttons/Button/Button";

function PaymentPopup({image, title, subtitle, email, name, onClose}) {
    
    return(
        <div className="payment-popup">
            <div className="payment-popup__img-wrapper">
                <img className="payment-popup__img" src={image} alt={name} />
            </div>
            <div className="payment-popup__text">
                <p className="payment-popup__title">{title}</p>
                <p className="payment-popup__subtitle">{subtitle}</p>
                <p className="payment-popup__email">{email}</p>
            </div>
            <Button
              additionalClass="payment-popup__button-close"
              onClick={onClose}
            ></Button>
        </div>
    )
}

export default PaymentPopup;