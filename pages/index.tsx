import { PasswordInfo } from "components/Crud/PasswordInfo";
import { useState } from "react";
import styled from "styled-components";
import { FlexRow, RoundedCorner } from "styles/common";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  background-color: #121212;
  color: white;

  text-align: center;
  padding: 1rem 2rem;
`;

const StyledAnchor = styled.a`
  ${RoundedCorner}
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: #267a41;

  width: 25%;
  min-width: 5em;
  height: 4em;

  border: none;
  cursor: pointer;
  text-decoration: none;
`;

const FilterBar = styled.input`
  ${RoundedCorner}
  width: 75%;
  height: 4em;

  padding: 1em;
`;

const MainOptionsRow = styled(FlexRow)`
  gap: 1em;
`;

const PasswordsList = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 2fr;
  grid-gap: 15px 10px;
`;

const Title = styled.div`
  ${RoundedCorner}
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 5em;

  background-color: #aaa;
  color: black;
`;

const Home = () => {
  const [filter, setFilter] = useState("");

  const data = [
    {
      id: 2413,
      url: "test.example.com",
      description: "lorem ipsum sit amet dolor",
      password: "hunter2",
    },
    {
      id: 2113,
      url: "test.example.com",
      description: "small",
      password: "hunter2",
    },
    {
      id: 2137,
      url: "test.example.com",
      description: "lorem ipsum sit amet dolor even logner but sfealdf",
      password: "hunter2",
    },
    {
      id: 2132,
      url: "test.example.com",
      description: "lorem ipsum sit amet dolor",
      password: "hunter2",
    },
    {
      id: 2135,
      url: "test.example.com",
      description: "lorem ipsum sit amet dolor",
      password: "hunter2",
    },
    {
      id: 2213,
      url: "test.example.com",
      description: "lorem ipsum sit amet dolor",
      password: "hunter2",
    },
    {
      id: 2113,
      url: "test.example.com",
      description: "lorem ipsum sit amet dolor",
      password: "hunter2",
    },
    {
      id: 2193,
      url: "test.example.com",
      description: "lorem ipsum sit amet dolor",
      password: "hunter2",
    },
    {
      id: 21312,
      url: "test.example.com",
      description: "lorem ipsum sit amet dolor",
      password: "hunter2",
    },
  ];

  return (
    <HomePage>
      <h1>Passwords</h1>

      <MainOptionsRow>
        <StyledAnchor href="/save">Create</StyledAnchor>
        <FilterBar
          type="text"
          id="filter"
          name="filter"
          placeholder="Filter by description"
          value={filter}
          onInput={(e) => setFilter((e.target as HTMLInputElement).value)}
        />
      </MainOptionsRow>

      <PasswordsList>
        <Title>URL</Title>
        <Title>Description</Title>
        <Title>Password</Title>
        <Title>Options</Title>

        {data.map((res) => (
          <PasswordInfo {...res} />
        ))}
      </PasswordsList>
    </HomePage>
  );
};

export default Home;
