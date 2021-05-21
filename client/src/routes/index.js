import {
  FrontPageView,
  D2PlannerView,
  LoginView,
  RegisterView
} from '../views/';

const ROUTES = [
  { path: '/', exact: true, component: FrontPageView },
  { path: '/planner', component: D2PlannerView },
  { path: '/auth/login', component: LoginView },
  { path: '/auth/register', component: RegisterView },
  { path: '/auth/logout', component: D2PlannerView },
];

export default ROUTES;
