import Slider from "react-slick";
import slip from "../../assets/images/slip-img.jpg";


const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 500,
      autoplaySpeed: 2200,
      slidesToScroll: 1,
      slidesToShow: 4,
      responsive: [
            {
                  breakpoint: 1250,
                  settings: {
                        slidesToShow: 3
                  },
            },
            {
                  breakpoint: 950,
                  settings: {
                        slidesToShow: 2
                  },
            },
            {
                  breakpoint: 650,
                  settings: {
                        slidesToShow: 1
                  }
            },
      ],
};

function HorizontalSlider() {
      return (
            <Slider {...settings} className="slider-setting-service">
                  <div class="Service-card">
                        <div class="card-inner">
                              <img src={slip} aslt="image" />
                              <p>Articles & Blog Posts</p>
                        </div>
                  </div>
                  <div class="Service-card">
                        <div class="card-inner">
                              <img src={slip} aslt="image" />
                              <p>Articles & Blog Posts</p>
                        </div>
                  </div>
                  <div class="Service-card">
                        <div class="card-inner">
                              <img src={slip} aslt="image" />
                              <p>Articles & Blog Posts</p>
                        </div>
                  </div>
                  <div class="Service-card">
                        <div class="card-inner">
                              <img src={slip} aslt="image" />
                              <p>Articles & Blog Posts</p>
                        </div>
                  </div>
                  <div class="Service-card">
                        <div class="card-inner">
                              <img src={slip} aslt="image" />
                              <p>Articles & Blog Posts</p>
                        </div>
                  </div>
                  <div class="Service-card">
                        <div class="card-inner">
                              <img src={slip} aslt="image" />
                              <p>Articles & Blog Posts</p>
                        </div>
                  </div>
            </Slider>
      )
}

export default HorizontalSlider