import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home-page">
      <div className="top-banner">
        <div className="top-banner-text">
          <h1>Organika</h1>
          <h2>Fresh food, healthier life.</h2>
        </div>
        <img src="/images/wrap2.jpg" alt="fresh food"></img>
      </div>

      <div className="bottom">
        <div className="left">
          <h4>Fresh food at your door a click away</h4>
          <Link className="btn btn-lg btn-dark" to="/catalog">
            Check out amazing catalog!
          </Link>
        </div>

        <div className="right">
          <img src="/images/farmer.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
