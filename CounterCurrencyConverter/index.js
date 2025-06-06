/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { ToastProvider } from 'react-native-toast-notifications';

const Root = () => (
    <ToastProvider>
      <App />
    </ToastProvider>
  );

AppRegistry.registerComponent(appName, () => Root);
