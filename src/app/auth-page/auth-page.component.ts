import { Component } from "@angular/core";
import { RegisterFormComponent } from "../register-form/register-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { LoginFormComponent } from "../login-form/login-form.component";

@Component({
  selector: "app-auth-page",
  standalone: true,
  imports: [RegisterFormComponent, MatTabsModule, LoginFormComponent],
  template: `
    <div class="wrapper">
      <mat-tab-group animationDuration="0s" dynamicHeight>
        <mat-tab label="Registration">
          <app-register-form></app-register-form>
        </mat-tab>
        <mat-tab label="Login">
          <app-login-form></app-login-form>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: `
    .wrapper {
      margin: 10px auto;
      max-width: 640px;
    }
  `,
})
export class AuthPageComponent {}
