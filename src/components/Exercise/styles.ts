import styled from 'styled-components/native';

export const ExerciseContainer = styled.View`
  flex: 1;
`;

export const ExerciseItem = styled.TouchableOpacity`
  border: 0.5px solid #473f45;
  border-radius: 5px;
  margin: 10px 15px 0px;
  padding: 10px;
  background: white;
`;

export const AddExerciseButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #b32367;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0px 15px 10px;
`;
