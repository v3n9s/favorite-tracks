import type { Routes } from "@angular/router";
import { AuthPageComponent } from "./auth-page/auth-page.component.js";

export const routes: Routes = [
  {
    path: "auth",
    component: AuthPageComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth",
  },
];
