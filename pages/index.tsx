import { PasswordInfo } from "components/Crud/PasswordInfo";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FlexRow, RoundedCorner } from "styles/common";
import FetchService from "../api/fetch.service";

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

const MainOptionsRow = styled(FlexRow)`
  justify-content: center;
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
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchService.get("/passwords").then((res) => {
      const passwords = res._embedded.passwords;
      console.log(passwords);
      setData(passwords);
    });
  }, []);

  return (
    <HomePage>
      <h1>Passwords</h1>

      <MainOptionsRow>
        <StyledAnchor href="/save">Create</StyledAnchor>
      </MainOptionsRow>

      <PasswordsList>
        <Title>Name</Title>
        <Title>Site</Title>
        <Title>Password</Title>
        <Title>Options</Title>

        {data.map(
          (res: {
            id: number;
            name: string;
            site: string;
            password: string;
          }) => (
            <PasswordInfo {...res} />
          )
        )}
      </PasswordsList>
    </HomePage>
  );
};

export default Home;
