import React from "react";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import NoResult from "../NoResult/NoResult";
import EventCards from "../EventCards/EventCards";
import Footer from "../Footer/Footer";

function NoResultPage({value}) {
    return(
        <>
            <Header />
            <section className="no-result-page">
                <div className="no-result-page__container">
                    <h1 className="no-result-page__title">Результат поиска "{value}"</h1>
                    <Calendar />
                    <NoResult
                        textButton={'Попробовать еще раз'}
                        title={'По вашему запросу ничего не найдено'}
                        subtitle={'Уточните, пожалуйста, ваш запрос'}
                    />
                </div>
                <EventCards />
            </section>
            <Footer />
        </>

    )
}

export default NoResultPage;