import { tourList } from "../data";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">

      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">

        {
          tourList.map(tour => {
            const { id, image, name, date, time, location, price, des } = tour;
            return (<article className="tour-card">
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
            </article>)
          })
        }



      </div>
    </section>
  );
}

export default Tours;