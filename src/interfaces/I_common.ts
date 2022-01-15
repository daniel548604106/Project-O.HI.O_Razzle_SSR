interface RouteProps {
  path: string;
  exact: boolean;
  component: any;
  loadData?: (store: any) => void;
}

export type { RouteProps };
