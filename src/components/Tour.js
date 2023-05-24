const Tour = ({ id, image, name, date, time, location, price, des }) => {
  return (
    <div>
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{name}</h4>
          </div>
          <p>
            {des}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {location}
            </p>
            <p>{time}</p>
            <p>from ${price}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Tour;