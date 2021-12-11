import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ComponentsCommonProps {}

const StyledComponentsCommon = styled.div`
  color: pink;
`;

export function ComponentsCommon(props: ComponentsCommonProps) {
  return (
    <StyledComponentsCommon>
      <h1>Welcome to ComponentsCommon!</h1>
    </StyledComponentsCommon>
  );
}

export default ComponentsCommon;
