import { SafeAreaView } from 'react-native-safe-area-context'
import { LoadingIndicator, ViewContainer} from './styles'

export default function FontsLoading () {
	return(
		<SafeAreaView>
			<ViewContainer>
				<LoadingIndicator />
			</ViewContainer>
		</SafeAreaView>
	)
}