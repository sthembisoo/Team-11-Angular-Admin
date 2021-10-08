import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeservice: EmployeeService, private route: Router) { }

  EmployeeList!: Employee[];
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  eMployee: any;
  employeebyid: any=[];
  EmployeeSearch!: string;
  role: any;
  session: any;

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
  this.session = localStorage.getItem("accessToken");
  if (this.session != null)
  {
    if (this.role != 3){
      this.route.navigate(["authorization"]);
    }
    else {
      this.employeeservice.getEmployee().subscribe((data: Employee[]) =>{
        this.EmployeeList=data;
      })
    }
  }
  else {
    this.route.navigate([""])
  } 
  }

  refreshEmployeeList() {
    this.employeeservice.getEmployee().subscribe((data: Employee[]) =>{
      this.EmployeeList=data;
    })
  }
  addClick() {
    this.eMployee={
      EmployeeID: 0,
      Name: "",
      Surname: "",
      Gender: "",
      Title: "",
      CellNumber: 0,
      PhysicalAddress: "",
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditDepComp=true;
  }
  viewClick(employee: any) {
    this.employeebyid=employee;
  }
  editClick(employee: any) {
    this.eMployee=employee;
    this.ModalTitle="Update Employee";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshEmployeeList();
  }
  deleteemployee(employee: any) {
    if(confirm('Are you sure you want to delete this employee?')) {
      this.employeeservice.deleteEmployee(employee.EmployeeID).subscribe(res => {
        alert(res.toString());
        this.refreshEmployeeList();
      })
    }
  }

}

 
 