import imag from "../../assets/images/antony.jpg";
import Slider from "react-slick";

function SliderNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SliderPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section class="main">
        <div class="wrapper">
          <div class="heading">
            <h2>Testimonial</h2>
          </div>
          <Slider {...settings}>
            <div class="main-inn">
              <div class="inn-card-inn">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium, odio ex. In earum dicta dolore eius ullam minima
                  eveniet vero soluta doloremque sed eos nesciunt natus,
                  similique ipsum dolor sunt!
                </p>
              </div>
              <div class="round-inn">
                <img src={imag} />
                <h2>Antony Moore</h2>
                <p>Restaurant Owner</p>
              </div>
            </div>

            <div class="main-inn">
              <div class="inn-card-inn">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium, odio ex. In earum dicta dolore eius ullam minima
                  eveniet vero soluta doloremque sed eos nesciunt natus,
                  similique ipsum dolor sunt!
                </p>
              </div>
              <div class="round-inn">
                <img src={imag} />
                <h2>Antony Moore</h2>
                <p>Restaurant Owner</p>
              </div>
            </div>

            <div class="main-inn">
              <div class="inn-card-inn">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium, odio ex. In earum dicta dolore eius ullam minima
                  eveniet vero soluta doloremque sed eos nesciunt natus,
                  similique ipsum dolor sunt!
                </p>
              </div>
              <div class="round-inn">
                <img src={imag} />
                <h2>Antony Moore</h2>
                <p>Restaurant Owner</p>
              </div>
            </div>

            <div class="main-inn">
              <div class="inn-card-inn">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium, odio ex. In earum dicta dolore eius ullam minima
                  eveniet vero soluta doloremque sed eos nesciunt natus,
                  similique ipsum dolor sunt!
                </p>
              </div>
              <div class="round-inn">
                <img src={imag} />
                <h2>Antony Moore</h2>
                <p>Restaurant Owner</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}
