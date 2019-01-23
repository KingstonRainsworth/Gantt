import LandingPage  from '../page/LandingPage/LandingPage.js';
import About from '../page/About';
import Service from '../page/Service';

var indexRoutes = [
  { path:'/service', name: 'Service', component: Service },
  { path:'/about', name: 'About', component: About },
  { path: '/', name: 'Landing', component: LandingPage }
]

export default indexRoutes;
