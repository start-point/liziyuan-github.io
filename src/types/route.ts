export interface IRouteMeta {
  title: string;
  icon?: string;
}

export interface IRoute {
  children?: any;
  auth?: any;
  path: string;
  component?: any;
  exact?: boolean;
  redirect?: string;
  meta?: IRouteMeta;
  hidden?: boolean;
}
