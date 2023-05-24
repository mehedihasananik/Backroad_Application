import { serviceList } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {
          serviceList.map(service => {
            console.log(service)
            return (<Service key={service.id} name={service.name} des={service.des} />)
          })
        }
      </div>
    </section>
  );
}

export default Services;