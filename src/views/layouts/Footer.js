import { Instagram, Facebook } from '@material-ui/icons';

export default function Footer() {
  return (
    <div class="wrapper">
      <section class="row5">
        <div class="cus_csstwotow customer-info">
          <h2>Contact Information</h2>
          <ul>
            <li>Call Us 24/7 Free</li>
            <li>
              <i class="fa-solid fa-phone"></i> 1234 5678 901
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i> 60, 29th Street, San
              Francisco, CA 94110, United States
            </li>
          </ul>
        </div>
        <div class="cus_csstwotow">
          <h2>Get To Know Us</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="cus_csstwotow">
          <h2>Our Services</h2>
          <ul>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
            <li>
              <a href="#">Amazon</a>
            </li>
            <li>
              <a href="#">E-Commerce</a>
            </li>
            <li>
              <a class="ancmore" href="#">
                Show More
              </a>
            </li>
          </ul>
        </div>
        <div class="cus_csstwotow">
          <h2>Connect With Us</h2>
          <ul class="last-ul">
            <li>
              <a class="ancone" href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a class="anctwo" href="#">
                <Instagram />
              </a>
            </li>
            <li>
              <a class="ancthree" href="#">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
