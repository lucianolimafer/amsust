import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import Courses from '../screens/Courses';
import Impact from '../screens/Impact';
import Laws from '../screens/Laws';
import Collect from '../screens/Collect';

import Quiz from '../screens/Quiz';
import QuizAcidRain from '../pages/QuizAcidRain';
import QuizCompost from '../pages/QuizCompost';
import QuizEnviron from '../pages/QuizEnviron';
import QuizOil from '../pages/QuizOil';
import QuizPils from '../pages/QuizPils';
import QuizRelact from '../pages/QuizRelact';
import QuizTOF from '../pages/QuizTOF';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      headerShown: false,
      cardStyle: {
        backgroundColor: '#2f3532',
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <App.Screen name="Home" component={Home} />

    <App.Screen name="Courses" component={Courses} />
    <App.Screen name="Impact" component={Impact} />
    <App.Screen name="Laws" component={Laws} />
    <App.Screen name="Collect" component={Collect} />

    <App.Screen name="Quiz" component={Quiz} />
    <App.Screen name="QuizAcidRain" component={QuizAcidRain} />
    <App.Screen name="QuizCompost" component={QuizCompost} />
    <App.Screen name="QuizEnviron" component={QuizEnviron} />
    <App.Screen name="QuizOil" component={QuizOil} />
    <App.Screen name="QuizPils" component={QuizPils} />
    <App.Screen name="QuizRelact" component={QuizRelact} />
    <App.Screen name="QuizTOF" component={QuizTOF} />
  </App.Navigator>
);

export default Routes;
