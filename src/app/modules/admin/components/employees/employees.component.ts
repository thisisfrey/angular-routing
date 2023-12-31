import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  // ? constructor(public tableData = this.tableData) {}
  // ? Inject
  // TODO: tableData from here to html
  // TODO: ng-for in table
  // TODO add type

  employees: any[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      birthday: '1990-05-15',
      address: '123 Main Street, City A, Country',
      mobileNumber: '555-123-4567',
      companyEntrance: '2015-03-20',
      department: 'Software Development',
      profession: 'Software Engineer',
      office: 'New York',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      birthday: '1985-12-30',
      address: '456 Park Avenue, City B, Country',
      mobileNumber: '555-987-6543',
      companyEntrance: '2010-11-05',
      department: 'Data Science',
      profession: 'Data Scientist',
      office: 'Boston',
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      birthday: '1995-08-22',
      address: '789 Broadway, City C, Country',
      mobileNumber: '555-567-8901',
      companyEntrance: '2018-07-12',
      department: 'Network Engineering',
      profession: 'Network Engineer',
      office: 'Colorado',
    },
    {
      firstName: 'Emily',
      lastName: 'Brown',
      birthday: '1992-03-18',
      address: '101 Oak Lane, City D, Country',
      mobileNumber: '555-111-2222',
      companyEntrance: '2012-09-01',
      department: 'Web Development',
      profession: 'Web Developer',
      office: 'New York',
    },
    {
      firstName: 'Daniel',
      lastName: 'Williams',
      birthday: '1988-11-02',
      address: '555 Elm Street, City A, Country',
      mobileNumber: '555-999-8888',
      companyEntrance: '2016-04-15',
      department: 'Software Development',
      profession: 'Software Engineer',
      office: 'New York',
    },
    {
      firstName: 'Sarah',
      lastName: 'Anderson',
      birthday: '1991-09-05',
      address: '222 Pine Road, City B, Country',
      mobileNumber: '555-777-6666',
      companyEntrance: '2017-10-20',
      department: 'Data Science',
      profession: 'Data Analyst',
      office: 'Boston',
    },
    {
      firstName: 'Robert',
      lastName: 'Nguyen',
      birthday: '1989-07-12',
      address: '777 Maple Avenue, City C, Country',
      mobileNumber: '555-444-3333',
      companyEntrance: '2014-12-08',
      department: 'Network Engineering',
      profession: 'Network Administrator',
      office: 'Colorado',
    },
    {
      firstName: 'Jessica',
      lastName: 'Garcia',
      birthday: '1993-04-24',
      address: '333 Willow Road, City D, Country',
      mobileNumber: '555-222-1111',
      companyEntrance: '2019-02-14',
      department: 'Web Development',
      profession: 'Frontend Developer',
      office: 'New York',
    },
    {
      firstName: 'Matthew',
      lastName: 'Kumar',
      birthday: '1987-10-10',
      address: '888 Birch Lane, City A, Country',
      mobileNumber: '555-666-7777',
      companyEntrance: '2013-06-18',
      department: 'Software Development',
      profession: 'Software Engineer',
      office: 'New York',
    },
    {
      firstName: 'Laura',
      lastName: 'Lee',
      birthday: '1996-01-07',
      address: '111 Maple Avenue, City B, Country',
      mobileNumber: '555-333-4444',
      companyEntrance: '2020-08-30',
      department: 'Data Science',
      profession: 'Machine Learning Engineer',
      office: 'Boston',
    },
    {
      firstName: 'Thomas',
      lastName: 'Scott',
      birthday: '1984-06-28',
      address: '555 Pine Road, City C, Country',
      mobileNumber: '555-888-9999',
      companyEntrance: '2009-03-12',
      department: 'Network Engineering',
      profession: 'Network Security Specialist',
      office: 'Colorado',
    },
    // Add more employee objects as needed
  ];
}
