import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data-table/data-table.service';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../../store/reducers/users.reducers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'je-org-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
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

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private store: Store,
    private route: ActivatedRoute
  ) {
    const formControls: Record<string, any> = {};
    this.fields.forEach((field) => {
      formControls[field.name] = ['', field.validation];
    });
    this.myForm = this.formBuilder.group(formControls);
  }

  ngOnInit() {
    // Metode ngOnInit
    this.store.pipe(select(selectUser)).subscribe((user: any) => {
      this.myForm.patchValue(user);
      console.log({ user });
    });
  }

  onSubmit() {
    const isDetailRoute = this.route.snapshot.routeConfig?.path === 'detail';

    if (this.myForm.valid) {
      const formData = this.myForm.value;
      if (isDetailRoute) {
        this.dataService.putData(formData).subscribe((response) => {
          console.log('PUT request was successful', response);
        });
      } else {
        this.dataService.postData(formData).subscribe((response) => {
          console.log('POST request was successful', response);
        });
      }
    }
  }
}
