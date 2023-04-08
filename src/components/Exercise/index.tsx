import { Text } from '../Text';
import { AddExerciseButton, ExerciseItem, ExerciseContainer } from './styles';

export function Exercise(){
	return(
		<ExerciseContainer>

			<ExerciseItem>
				<Text>Supino</Text>
			</ExerciseItem>
			<ExerciseItem>
				<Text>Flexora</Text>
			</ExerciseItem>
			<ExerciseItem>
				<Text>Extensora</Text>
			</ExerciseItem>
			<ExerciseItem>
				<Text>Elevação lateral</Text>
			</ExerciseItem>

			<AddExerciseButton>
				<Text color='white'>Adicionar exercício</Text>
			</AddExerciseButton>

		</ExerciseContainer>

	);
}
