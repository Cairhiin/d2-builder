import {
  FrontPageView,
  D2PlannerView
} from '../views/';

const ROUTES = [
  { path: '/', exact: true, component: FrontPageView },
  { path: '/planner', component: D2PlannerView }
];

export default ROUTES;
