import { Text } from '../Text';
import { NavigationButton, NavigationContainer } from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function NavigationMenu(){
	return(
		<>
			<NavigationContainer>

				<NavigationButton>
					<AntDesign name="home" size={24} color="#473f45" />
					<Text size={9}>HOME</Text>
				</NavigationButton>

				<NavigationButton>
					<AntDesign name="form" size={24} color="#473f45" />
					<Text size={9}>EXERCÍCIOS</Text>
				</NavigationButton>

				<NavigationButton>
					<AntDesign name="profile" size={24} color="#473f45" />
					<Text size={9}>TREINOS</Text>
				</NavigationButton>

				<NavigationButton>
					<AntDesign name="team" size={24} color="#473f45" />
					<Text size={9}>ALUNOS</Text>
				</NavigationButton>

			</NavigationContainer>
		</>
	);
}
