
export interface ISidenav {
  screenWidth: number;
  collapsed: boolean;
}

export interface INavbarData {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: INavbarData[];
}
