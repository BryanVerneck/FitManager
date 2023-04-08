import { Text } from '../Text';
import { HeaderContainer } from './styles';

export function Header(){
	return(
		<HeaderContainer>
			<Text size={25} weight='700' color='#b32367'>
        FIT
				<Text size={25} color='#473f45'>MANAGER</Text>
			</Text>
		</HeaderContainer>
	);
}
