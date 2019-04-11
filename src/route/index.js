import LandingPage from '../page/LandingPage/LandingPage.js';
import About from '../page/About';
import Service from '../page/Service';
import Slogan from '../page/Slogan';
import Project from '../page/Project';
import Details from '../page/Details';

var indexRoutes = [
  { path: '/project/:id', name: 'Details', component: Details },
  { path: '/project', name: 'Project', component: Project },
  { path: '/slogan', name: 'Slogan', component: Slogan },
  { path: '/service', name: 'Service', component: Service },
  { path: '/about', name: 'About', component: About },
  { path: '/', name: 'Landing', component: LandingPage },
];

export default indexRoutes;
