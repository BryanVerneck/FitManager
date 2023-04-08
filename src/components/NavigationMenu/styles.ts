import styled from 'styled-components/native';

export const NavigationContainer = styled.View`
  height: 70px;
  border-top-width: 0.5px;
  border-top-color: #473f45;
  background: white;
  flex-direction: row;
`;

export const NavigationButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
