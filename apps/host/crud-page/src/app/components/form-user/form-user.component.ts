import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataService } from '../../services/data-table/data-table.service';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../../store/reducers/users.reducers';
import { ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'je-org-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    CommonModule,
  ],
})
export class FormUserComponent implements OnInit {
  myForm: FormGroup;

  fields: { name: string; type: string; label: string; validation: any }[] = [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      validation: Validators.required,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      validation: [Validators.required, Validators.email],
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      validation: Validators.required,
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website',
      validation: Validators.required,
    },
  ];
  matcher = new MyErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private store: Store,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    const formControls: Record<string, any> = {};
    this.fields.forEach((field) => {
      formControls[field.name] = new FormControl('', field.validation);
    });
    this.myForm = this.formBuilder.group(formControls);
  }

  ngOnInit() {
    this.store.pipe(select(selectUser)).subscribe((user: any) => {
      this.myForm.patchValue(user);
    });
  }

  onSubmit() {
    const isDetailRoute = this.route.snapshot.routeConfig?.path === 'detail';

    if (this.myForm.valid) {
      const formData = this.myForm.value;
      if (isDetailRoute) {
        this.dataService
          .putData(formData)
          .pipe(
            catchError((error) => {
              this.toastr.error('Failed', 'Data is failed to Edit');
              return throwError('Something went wrong!');
            })
          )
          .subscribe((response) => {
            this.toastr.success('Success', 'Data is successfully edited');
          });
      } else {
        this.dataService
          .postData(formData)
          .pipe(
            catchError((error) => {
              this.toastr.error('Failed', 'Data is failed to submit');
              return throwError('Something went wrong!');
            })
          )
          .subscribe((response) => {
            this.toastr.success('Success', 'Data is successfully submitted');
          });
      }
    }
  }
}
