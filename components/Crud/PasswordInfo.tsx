import styled from "styled-components";
import { FlexRow, RoundedCorner } from "styles/common";

interface PasswordInfoProps {
  id: number;
  url: string;
  description: string;
  password: string;
}

const Info = styled.div`
  ${RoundedCorner}
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  min-height: 5em;

  background-color: white;
  color: black;
`;

const Option = styled(Info)`
  color: white;
  border: none;
  width: 50%;

  cursor: pointer;
  text-decoration: none;
`;

const EditButton = styled(Option)`
  background-color: #267a41;
`;

const DeleteButton = styled(Option)`
  background-color: #bb1000;
`;

export function PasswordInfo({
  id,
  url,
  description,
  password,
}: PasswordInfoProps) {
  function handleDelete() {
    console.log(id);
  }

  return (
    <>
      <Info>{url}</Info>
      <Info>{description}</Info>
      <Info>{password}</Info>

      <FlexRow style={{ gap: "10px" }}>
        <EditButton as="a" href={`/save?id=${id}`}>
          EDIT
        </EditButton>
        <DeleteButton as="button" onClick={handleDelete}>
          DELETE
        </DeleteButton>
      </FlexRow>
    </>
  );
}
