
import Placeholder from '../../assets/images/antony.jpg'

export default function Testimonial(props) {
  return (
    <section class="main testimonials">
      <div class="wrapper">
        <div class="main-inn">
          <div class="heading">
            <h2>Testimonial</h2>
          </div>
          <div class="inn-card-inn">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, odio ex. In earum dicta
              dolore eius ullam minima eveniet vero soluta doloremque sed eos nesciunt natus, similique ipsum
              dolor sunt!</p>
          </div>
          <div class="round-inn">
            <img src={Placeholder} alt="" />
            <h2>Antony Moore</h2>
            <p>Restaurant Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
