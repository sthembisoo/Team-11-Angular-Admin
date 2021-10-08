import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addupdateemployee',
  templateUrl: './addupdateemployee.component.html',
  styleUrls: ['./addupdateemployee.component.css']
})
export class AddupdateemployeeComponent implements OnInit {

  constructor(private employeeservice: EmployeeService, private fb: FormBuilder) { }

  @Input() eMployee:any;
  EmployeeID!: string;
  Name!: string;
  Surname!: string;
  CellNumber!: number;
  PhysicalAddress!: string;
  GenID!: number;
  TitID!: number;
  selectedValue!: number;
  selectedValue2!: number;
  addupdate!: FormGroup;
  GenderList: any=[];
  TitleList: any=[];

  ngOnInit(): void {
    this.addupdate = this.fb.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      CellNumber: ['', Validators.required],
      PhysicalAddress: ['', Validators.required],
      selectedValue: ['', Validators.required],
      selectedValue2: ['', Validators.required]
      })
    this.EmployeeID= this.eMployee.EmployeeID;
    this.Name = this.eMployee.Name;
    this.Surname = this.eMployee.Surname;
    this.CellNumber = this.eMployee.CellNumber;
    this.PhysicalAddress = this.eMployee.PhysicalAddress;
    this.selectedValue = this.eMployee.GenID;
    this.selectedValue2 = this.eMployee.TitID;

    this.loadGenderList();
    this.loadTitleList();
  }
  loadGenderList(){
    this.employeeservice.getGender().subscribe((data:any)=>{
      this.GenderList=data;
  })
  }
  loadTitleList(){
    this.employeeservice.getTitle().subscribe((data:any)=>{
      this.TitleList=data;
  })
  }
  createEmployee(){
    var employee = {Name: this.Name,
    Surname: this.Surname,
    CellNumber: this.CellNumber,
    PhysicalAddress: this.PhysicalAddress,
    GenID: this.selectedValue,
    TitID: this.selectedValue2};
    if (this.Name == "" || this.Surname == "" || this.PhysicalAddress == "" || this.CellNumber == 0 || this.GenID == 0 || this.TitID == 0)
    {
      alert('Please enter complete employee details!')
    }
    else if(confirm("Are you sure you want to add this employee?")){
      this.employeeservice.createEmployee(employee).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
  updateEmployee(){
    var employee = {EmployeeID: this.EmployeeID, 
      Name: this.Name,
      Surname: this.Surname,
      CellNumber: this.CellNumber,
      PhysicalAddress: this.PhysicalAddress,
      GenID: this.selectedValue,
      TitID: this.selectedValue2}
      if (this.Name == "" || this.Surname == "" || this.PhysicalAddress == "" || this.CellNumber == 0 || this.GenID == 0 || this.TitID == 0)
      {
        alert('Please enter complete employee details!')
      }
    else if(confirm("Are you sure you want to update this employee?")){
      this.employeeservice.updateEmployee(employee).subscribe(res =>{
        alert(res.toString());
      })
    }
  }


}
