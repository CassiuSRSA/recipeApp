import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiBunnySlippers } from "react-icons/gi";

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  padding-left: 0.5rem;
`;

const Nav = styled.nav`
  padding-top: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2.5rem;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <GiBunnySlippers />
          <Logo to={"/"}>BunBun Recipe App</Logo>
        </Nav>

        <Category />
        <Search />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
