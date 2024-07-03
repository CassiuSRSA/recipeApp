import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FormStyle = styled.form`
  margin: 0rem auto;

  max-width: 50rem;
  position: relative;

  input {
    border: none;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: 2px solid #313131;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #313131;
  }
`;

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
        placeholder="Search..."
      />
    </FormStyle>
  );
};

export default Search;
