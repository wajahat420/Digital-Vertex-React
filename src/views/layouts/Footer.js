import { Instagram, Facebook } from '@material-ui/icons';
import Pinterest from '../../assets/images/Pinterest.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div class="wrapper">
      <section class="row5">
        <div class="cus_csstwotow customer-info">
          <h2 className='heading'>Contact Information</h2>
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
          <h2 className='heading'>Get To Know Us</h2>
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
          <h2 className='heading'>Our Services</h2>
          <ul>
            <li>
              <Link to="/services">Web Design</Link>
            </li>
            <li>
              <Link to="/services">Graphic Design</Link>
            </li>
            <li>
              <Link to="/services">Amazon</Link>
            </li>
            <li>
              <Link to="/services">E-Commerce</Link>
            </li>
            <li>
              <Link className='ancmore' to="/services">Show More</Link>
            </li>
          </ul>
        </div>
        <div class="cus_csstwotow">
          <h2 className='heading'>Connect With Us</h2>
          <ul class="last-ul">
            <li>
              <a class="ancone" href="https://www.facebook.com">
                <Facebook />
              </a>
            </li>
            <li>
              <a class="anctwo" href="https://www.instagram.com/">
                <Instagram />
              </a>
            </li>
            <li>
              <a class="ancthree" href="https://www.pinterest.com/">
                <img src={Pinterest} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
