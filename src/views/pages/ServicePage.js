import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Service from "../components/Service";
import { services } from "../../data";
import HorizontalSlider from "../components/HorizontalSlider";

export default function ServicePage() {

  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div class="wrapper">
        <section class="service-row-1">
          <div class="service-row-1-col1">
            <h2>Writing & Translation</h2>
            <p>Get your word across-in any languages</p>
            {/* <a href="#">
              <i class="fa-brands fa-youtube"></i>How fiverr works
            </a> */}
          </div>
        </section>
      </div>

      <div class="wrapper">
        <section class="services-row-2">
          <div class="services-row-2-col1">
            <h2 className="heading">Most Popular in Writing & Translation</h2>
          </div>
          <HorizontalSlider />
        </section>
      </div>

      <div class="wrapper">
        <section class="services-row-3">
          <div class="services-row-3-col-1">
            <h2 className="heading">Explore Services</h2>
          </div>

          {
            services.map(elem => <Service title={elem.title} img={elem.img} list={elem.list} />)
          }

        </section>
      </div>
      <Footer />
    </div>
  );
}
