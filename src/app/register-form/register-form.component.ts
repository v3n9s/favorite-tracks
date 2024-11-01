import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  type ValidatorFn,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-register-form",
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
        <input
          matInput
          placeholder="Name used to login"
          formControlName="name"
        />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Public name</mat-label>
        <input
          matInput
          placeholder="Public name visible to others"
          formControlName="publicName"
        />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput type="password" formControlName="password" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Repeat password</mat-label>
        <input matInput type="password" formControlName="passwordRepeated" />
      </mat-form-field>
      <button class="submit-button" mat-flat-button>Register</button>
    </form>
  `,
  styleUrls: ["../shared/form.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group(
    {
      name: [
        "",
        [
          Validators.required, // eslint-disable-line @typescript-eslint/unbound-method
          Validators.minLength(1),
          Validators.maxLength(32),
        ],
      ],
      publicName: [
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
      passwordRepeated: [
        "",
        [
          Validators.required, // eslint-disable-line @typescript-eslint/unbound-method
          Validators.minLength(4),
          Validators.maxLength(64),
        ],
      ],
    },
    { validators: [passwordRepeatedValidator] },
  );
}

const passwordRepeatedValidator: ValidatorFn = (control) => {
  const password = control.get("password");
  const passwordRepeated = control.get("passwordRepeated");
  return password && password.value === passwordRepeated?.value
    ? null
    : { repeatedPassword: true };
};
