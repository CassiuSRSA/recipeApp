import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;

  @media (max-width: 1443px) {
    flex-direction: column;
    margin-top: 2rem;
    img {
      max-width: 20rem;
    }
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  @media (max-width: 1443px) {
    margin-bottom: 1rem;
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  @media (max-width: 1443px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "ingredients" ? "" : "active"}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "instructions" ? "" : "active"}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3>Recipe Summary</h3>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <h3>Instructions</h3>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient, index) => {
              return (
                <li key={index}>
                  {ingredient.name} {ingredient.measures.metric.amount}
                  {ingredient.measures.metric.unitShort}
                </li>
              );
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default Recipe;
