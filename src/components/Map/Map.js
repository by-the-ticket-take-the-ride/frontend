function Map({className, map}) {

    return(
        <iframe src={map} className={className}></iframe>
    )
}

export default Map;