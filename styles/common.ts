import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const SmallRoundedCorner = css`
  border-radius: 4px;
`;

export const RoundedCorner = css`
  border-radius: 8px;
`;

export const CenteredDiv = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
