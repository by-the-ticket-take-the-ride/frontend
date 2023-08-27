import React from "react";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import MainFrame from "../MainFrame/MainFrame";
import AboutEvent from "../AboutEvent/AboutEvent";
import Footer from "../Footer/Footer";
import EventLocation from "../EventLocation/EventLocation";

function EventPage() {
    return(
        <>
            <Header />
            {<Calendar />}
            <section className="event-page">
                <MainFrame />
                <AboutEvent />
                <EventLocation />
            </section>
            <Footer />
        </>

    )
}

export default EventPage;