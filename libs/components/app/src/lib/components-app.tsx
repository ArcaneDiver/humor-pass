import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ComponentsAppProps {}

const StyledComponentsApp = styled.div`
  color: pink;
`;

export function ComponentsApp(props: ComponentsAppProps) {
  return (
    <StyledComponentsApp>
      <h1>Welcome to ComponentsApp!</h1>
    </StyledComponentsApp>
  );
}

export default ComponentsApp;
