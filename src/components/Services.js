import { serviceList } from "../data";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">

      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {
          serviceList.map(service => {
            return (
              <article key={service.id} className="service">
                <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
                <div className="service-info">
                  <h4 className="service-title">{service.name}</h4>
                  <p className="service-text">
                    {service.des}
                  </p>
                </div>
              </article>)
          })
        }

      </div>



    </section>
  );
}

export default Services;