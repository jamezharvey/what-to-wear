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
    <form onSubmit={handleSubmit}>
      <label>
        Enter your city:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Home;
