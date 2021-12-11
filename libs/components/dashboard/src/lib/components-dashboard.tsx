import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ComponentsDashboardProps {}

const StyledComponentsDashboard = styled.div`
  color: pink;
`;

export function ComponentsDashboard(props: ComponentsDashboardProps) {
  return (
    <StyledComponentsDashboard>
      <h1>Welcome to ComponentsDashboard!</h1>
    </StyledComponentsDashboard>
  );
}

export default ComponentsDashboard;
