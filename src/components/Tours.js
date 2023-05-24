import { tourList } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">

      <Title title="featured" subTitle="tourss" />
      <div className="section-center featured-center">

        {
          tourList.map(tour => {
            return (<Tour key={tour.id} {...tour} />)
          })
        }
      </div>
    </section>
  );
}

export default Tours;