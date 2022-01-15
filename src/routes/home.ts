import { RouteProps } from '@/interfaces/I_common.js';
import Account from '@/pages/Account';
import Home, { loadHomeData } from '@/pages/Home';

const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
    loadData: loadHomeData,
  },
  {
    path: "/accout",
    exact: true,
    component: Account,
  },
];

export default routes;
