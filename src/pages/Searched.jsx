import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Searched = () => {
  const [searchedRecipes, setSearchRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&query=${name}`
    );
    const recipes = await data.json();
    setSearchRecipes(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const recipeExist = searchedRecipes.length === 0 ? false : true;

  if (!recipeExist) {
    return <h2>No recipes found... Please try another</h2>;
  }

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Searched;
