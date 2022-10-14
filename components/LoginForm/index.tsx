import styled from "styled-components";
import { FlexColumn, RoundedCorner } from "../../styles/common";
import { useState } from "react";
import { useRouter } from "next/router";
import UserService from "../../api/user.service";

const StyledForm = styled(FlexColumn)`
  ${RoundedCorner}
  background-color: #202020;

  gap: 1em;

  align-items: center;
  justify-content: center;

  width: 30rem;
  height: 40rem;
`;

const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin-top: 5px;
`;

const LoginButton = styled.button`
  ${RoundedCorner}
  color: white;
  background-color: #267a41;

  width: 50%;
  height: 3em;

  border: none;
  cursor: pointer;
`;

export function LoginForm() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  function handleLogin() {
    if (username.length === 0 && password.length === 0) {
      return;
    }

    UserService.login({ username, password }).then(() => {
      const returnUrl = router.query.returnUrl || "/";
      router.push(returnUrl as string);
    });
  }

  return (
    <StyledForm>
      <h1>Login</h1>

      <FlexColumn style={{ width: "50%" }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Type your username"
          value={username}
          onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
        />
        <StyledHr />
      </FlexColumn>

      <FlexColumn style={{ width: "50%" }}>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
        <StyledHr />
      </FlexColumn>

      <LoginButton onClick={handleLogin}>Login</LoginButton>
    </StyledForm>
  );
}
