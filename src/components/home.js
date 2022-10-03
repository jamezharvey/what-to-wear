import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${city}`);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="p-5 text-center">
          <h1 className="mb-1">What To Wear</h1>
          <h4 className="mb-1">By James Harvey</h4>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Where are you?"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="text-center">
            <input
              className="btn btn-dark btn-lg mt-3"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
