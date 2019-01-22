import LandingPage  from '../page/LandingPage/LandingPage.js';
import About from '../page/About';

var indexRoutes = [
  { path:'/about', name: 'About', component: About },
  { path: '/', name: 'Landing', component: LandingPage }
]

export default indexRoutes;
