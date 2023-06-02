import "./scss/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicePage from "./views/pages/ServicePage";
import Testimonial from "./views/layouts/Testimonial";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
