import NavigationMenu from '../components/NavigationMenu';
import { Container } from './styles';
import { Header } from '../components/Header';
import { Exercise } from '../components/Exercise';

export function Main(){
	return(
		<Container>

			<Header/>
			<Exercise/>
			<NavigationMenu/>

		</Container>
	);
}
