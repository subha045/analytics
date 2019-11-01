import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { RevenueComponent } from "../../pages/revenue/revenue.component";
import { GameCategoryComponent } from 'src/app/pages/gamecategory/gamecategory.component';
import { AuthGuard } from 'src/app/authguard.service';
import { MonitoringComponent } from 'src/app/pages/nonitoring/monitoring.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard", component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  {
    path: "user", component: UserComponent,
    canActivate: [AuthGuard]
  },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  {
    path: 'revenue', component: RevenueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category', component: GameCategoryComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'monitoring', component: MonitoringComponent,
    canActivate: [AuthGuard]
  }
];
