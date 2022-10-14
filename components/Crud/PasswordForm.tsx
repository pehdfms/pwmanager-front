import { PasswordData } from "api/types";
import { useState, useEffect } from "react";
import { FlexColumn, FlexRow, RoundedCorner } from "styles/common";
import styled from "styled-components";
import FetchService from "api/fetch.service";

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

const StyledAnchor = styled.a`
  ${RoundedCorner}
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: #aaaaaa;

  width: 50%;
  min-width: 5em;
  height: 3em;

  border: none;
  cursor: pointer;
  text-decoration: none;
`;

const SaveButton = styled.button`
  ${RoundedCorner}
  color: white;
  background-color: #267a41;

  width: 50%;
  min-width: 5em;
  height: 3em;

  border: none;
  cursor: pointer;
`;

const Alert = styled.div`
  ${RoundedCorner}
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

const ErrorMessage = styled(Alert)`
  background-color: #bb1000;
`;

const SuccessMessage = styled(Alert)`
  background-color: #267a41;
`;

const SHOW_ALERT_TIMEOUT = 3000;

export function PasswordForm(props: Partial<PasswordData>) {
  const isSaveForm = !props.id;

  const [passwordData, setPasswordData] =
    useState<Partial<PasswordData>>(props);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setPasswordData(props);
  }, [props]);

  function error() {
    if (showError) {
      return;
    }

    setShowSuccess(false);
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, SHOW_ALERT_TIMEOUT);
  }

  function success() {
    if (showSuccess) {
      return;
    }

    setShowError(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, SHOW_ALERT_TIMEOUT);
  }

  function savePassword(data: {
    name: string;
    site: string;
    password: string;
  }) {
    FetchService.post("/passwords", data);
  }

  function handleSave() {
    const { name, site, password } = passwordData;
    if (name && site && password) {
      isSaveForm
        ? // rewriting these fields manually otherwise typescript complains
          savePassword({ name, site, password })
        : updatePassword(passwordData);
      success();
    } else {
      error();
    }
  }

  function handleInput(target: HTMLInputElement) {
    const name = target.name;
    const value = target.value;
    setPasswordData({ ...passwordData, [name]: value });
  }

  return (
    <StyledForm>
      <div style={{ position: "relative", height: "20%", width: "75%" }}>
        <SuccessMessage
          style={{
            visibility: showSuccess ? "visible" : "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          Password {isSaveForm ? "saved" : "updated"} succesfully!
        </SuccessMessage>

        <ErrorMessage
          style={{
            visibility: showError ? "visible" : "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          Please fill out all the fields!
        </ErrorMessage>
      </div>

      <h1>{isSaveForm ? "Save" : "Update"} Password</h1>

      <FlexColumn style={{ width: "50%" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="name"
          id="name"
          name="name"
          placeholder="Type your name"
          value={passwordData.name}
          onInput={(e) => handleInput(e.target as HTMLInputElement)}
          required
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
          value={passwordData.password}
          onChange={(e) => handleInput(e.target as HTMLInputElement)}
          required
        />
        <StyledHr />
      </FlexColumn>

      <FlexColumn style={{ width: "50%" }}>
        <label htmlFor="site">Site:</label>
        <input
          type="text"
          id="site"
          name="site"
          placeholder="Type your site"
          value={passwordData.site}
          onChange={(e) => handleInput(e.target as HTMLInputElement)}
          required
        />
        <StyledHr />
      </FlexColumn>

      <FlexRow style={{ width: "75%", gap: "2em", marginTop: "2em" }}>
        <SaveButton onClick={handleSave}>Save</SaveButton>
        <StyledAnchor href="/">Cancel</StyledAnchor>
      </FlexRow>
    </StyledForm>
  );
}
