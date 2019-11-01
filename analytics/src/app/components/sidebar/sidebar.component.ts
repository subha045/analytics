import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Overview",
    icon: "icon-chart-bar-32",
    class: ""
  }, {
    path: "/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  }, {
    path: "/revenue",
    title: "Revenue",
    icon: "icon-coins",
    class: ""
  }, {
    path: "/category",
    title: "Game Catagory",
    icon: "icon-controller",
    class: ""
  }, {
    path: "/monitoring",
    title: "App Service Monitoring",
    icon: "icon-settings",
    class: ""
  }
  // }, {
  //   path: "/widgets",
  //   title: "Widgets",
  //   icon: "icon-chart-pie-36",
  //   class: ""
  // }
  // },
  // {
  //   path: "/icons",
  //   title: "Icons",
  //   icon: "icon-atom",
  //   class: ""
  // },
  /*
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  role:string=localStorage.getItem("role");

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
