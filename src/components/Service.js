const Service = ({ id, des, name }) => {

  return (
    <article className="service">
      <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
      <div className="service-info">
        <h4 className="service-title">{name}</h4>
        <p className="service-text">
          {des}
        </p>
      </div>
    </article>

  );
}

export default Service;