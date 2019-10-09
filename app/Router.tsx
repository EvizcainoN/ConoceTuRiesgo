import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BasicDataScreen } from './screens/first.screen';
import { AditionalDataScreen } from './screens/aditional_data.screen';
import { ResultScreen } from './screens/result.screen';

const MainNavigator = createStackNavigator({
    BasicData: {
        screen: BasicDataScreen,
    },
    Adicional: {
        screen: AditionalDataScreen
    },
    Result: {
        screen: ResultScreen
    }
}, {
    initialRouteName: 'BasicData'
});

const App = createAppContainer(MainNavigator);

export default App;