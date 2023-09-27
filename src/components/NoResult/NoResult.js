import Button from "../Buttons/Button/Button";

function NoResult({textButton, title, subtitle}) {
    return(
            <section className="no-result">
                <div className="no-result__container">
                    <div className="no-result__img"></div>
                    <div className="no-result__text">
                        <p className="no-result__title">{title}</p>
                        <p className="no-result__subtitle">{subtitle}</p>
                    </div>
                        <Button additionalClass={'no-result__button'} gradient={true} >
                            {textButton}
                        </Button>
                </div>
            </section>

    )
}

export default NoResult;