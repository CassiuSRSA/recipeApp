import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  p {
    position: absolute;
    color: white;
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2rem;
    z-index: 10;
    text-align: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  }
`;

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);

  // Function for getting random list of popular items from API
  const getVeggie = async () => {
    const localVeggie = localStorage.getItem("veggie");

    // If already stored in local storage call from there instead of making API call
    if (localVeggie) {
      setVeggie(JSON.parse(localVeggie));
    } else {
      // Call for new list if nothing exists in local storage
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt={recipe.title} />
                  <p>{recipe.title}</p>
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
