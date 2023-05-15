import image from "../../assets/images/dvp.jpg";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Services() {
  return (
    <div>
      <section class="services">
        <div class="wrapper">
          <div class="services-col-1">
            <div class="services-img">
              <img src={image} alt="image" />
            </div>
            <div class="services-text">
              <h2>Development services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                commodi distinctio ut facilis hic maxime delectus assumenda!
                Unde nihil, nisi enim sit molestias aperiam vero illum provident
                vitae est delectus similique obcaecati quo dolor amet.
              </p>

              <div class="services-ul">
                <ul>
                  <li>
                    <ChevronRightIcon />
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <ChevronRightIcon />
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <ChevronRightIcon />
                    <a href="#">Graphic design</a>
                  </li>
                  <li>
                    <ChevronRightIcon />
                    <a href="#">E-commerce</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <ChevronRightIcon />
                    <a href="#">Amazon</a>
                  </li>
                  <li>
                    <ChevronRightIcon />
                    <a href="#">Daraz</a>
                  </li>
                  <li>
                    <ChevronRightIcon />
                    <a href="#">Shopify</a>
                  </li>
                  <li>
                    <ChevronRightIcon />
                    <a href="#">Ebay</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
