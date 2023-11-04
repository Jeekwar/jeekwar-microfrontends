import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../services/data-table/data-table.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'; // Import Store
import { AppState } from '../../app.state';
import { addUser } from '../../store/actions/users.actions';

export interface UsersInterface {
  position: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'je-org-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class TablePageComponent {
  private _data: any | undefined = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      const previousData = this.data;
    });
  }

  get data(): any {
    console.log('get data:', this._data);
    return this._data;
  }

  set data(value: any) {
    this._data = value.map((item: any, index: number) => {
      return {
        position: index + 1,
        name: item.name,
        email: item.email,
        phone: item.phone,
        website: item.website,
      };
    });
  }
  editUser(user: UsersInterface) {
    this.store.dispatch(
      addUser({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      })
    );
    // console.log({ user });
    this.router.navigate(['/crud-page/detail']);
  }
  // Important: resource will not be really updated on the server but it will be faked by response code
  deleteUser(user: any) {
    this.dataService.deleteData(user.position).subscribe((res) => {
      console.log('Successfully deleted ');
    });
  }

  addUser() {
    this.router.navigate(['/crud-page/add']);
  }

  displayedColumns: string[] = [
    'position',
    'name',
    'email',
    'phone',
    'website',
    'actions',
  ];
}
