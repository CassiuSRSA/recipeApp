import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 2rem;
  text-decoration: none;

  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transform: scale(0.8);
  border: 2px solid #313131;

  h4 {
    color: #313131;
    font-size: 1rem;
  }

  svg {
    color: #313131;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }

  &:hover {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai Food</h4>
      </SLink>
      <SLink to={"/cuisine/japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

export default Category;
