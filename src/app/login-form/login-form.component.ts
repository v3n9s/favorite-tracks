import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-login-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <form class="form" [formGroup]="form">
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput formControlName="name" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput type="password" formControlName="password" />
      </mat-form-field>
      <button class="submit-button" mat-flat-button>Login</button>
    </form>
  `,
  styleUrls: ["../shared/form.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    name: [
      "",
      [
        Validators.required, // eslint-disable-line @typescript-eslint/unbound-method
        Validators.minLength(1),
        Validators.maxLength(32),
      ],
    ],
    password: [
      "",
      [
        Validators.required, // eslint-disable-line @typescript-eslint/unbound-method
        Validators.minLength(4),
        Validators.maxLength(64),
      ],
    ],
  });
}
