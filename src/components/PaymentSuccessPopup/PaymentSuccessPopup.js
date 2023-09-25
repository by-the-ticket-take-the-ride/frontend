import React from "react";
import PaymentPopup from "../PaymentPopup/PaymentPopup";
import image from "../../assets/images/payment-success.svg"

function PaymentSuccessPopup({email, isOpen, onClose, totalOrder}) {

    return(
        <div className={`payment-success-popup ${isOpen ? 'payment-success-popup_is-opened' : ''}`}>
            <PaymentPopup
                image={image}
                title={`Ваш заказ №${totalOrder} успешно оплачен`}
                subtitle={'Проверьте билет по указанной почте'}
                email={email}
                name={'Оплачено успешно'}
                onClose={onClose}
            />
        </div>
    )
}

export default PaymentSuccessPopup;