import { WelcomePage } from './';
import settingsroute from '../settings/route';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome-page', component: WelcomePage, isIndex: true },
    settingsroute
  ],
};
