import Home, { loadHomeData } from '@/pages/Home/index.tsx';

export default [
  {
    path: "/",
    exact: true,
    component: Home,
    loadData: loadHomeData,
  },
];
