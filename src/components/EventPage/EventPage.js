import React from "react";
// import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import MainFrame from "../MainFrame/MainFrame";
import AboutEvent from "../AboutEvent/AboutEvent";

function EventPage() {
    return(
        <>
            {/* <Header /> */}
            <section className="event-page">
                {/* <BreadCrumbs /> */}
                {/* {<Сalendar />} */}
                <MainFrame />
                <AboutEvent />
            </section>
            {/* <Footer /> */}
        </>

    )
}

export default EventPage;