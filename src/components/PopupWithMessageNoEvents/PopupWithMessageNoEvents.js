function PopupWithMessageNoEvents({isPopupVisible, x}) {

    const popupStyle = {
        left: `${x - 50 }px`,
    };

    return(
        <div className={`popup-with-message-no-event ${isPopupVisible ? 'popup-with-message-no-event_is-visible' : ''}`} style={popupStyle}>
            Нет мероприятий в этот день
        </div>
    )
}

export default PopupWithMessageNoEvents;