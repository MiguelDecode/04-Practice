import React from "react";
import "./Testimonial.css";

function Testimonial(props) {
  return (
    <article className="testimonial">
      <img
        className="testimonial__image"
        alt="Foto de Emma"
        src={require(`../../images/testimonial-${props.image}.png`)}
      />
      <section className="testimonial__data">
        <h2 className="testimonial__person">
          <span className="testimonial__person--bold">{props.name}</span> in{" "}
          {props.country}
        </h2>
        <h3 className="testimonial__job">
          {props.job} at{" "}
          <span className="testimonial__company--bold">{props.company}</span>
        </h3>
        <p className="testimonial__text">"{props.opinion}"</p>
      </section>
    </article>
  );
}

export default Testimonial;
