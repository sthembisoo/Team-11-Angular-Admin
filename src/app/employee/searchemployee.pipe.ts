import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'searchemployee'
})
export class SearchemployeePipe implements PipeTransform {

  transform(EmployeeList: Employee[], EmployeeSearch: string): Employee[] {
    if(!EmployeeList || !EmployeeSearch){
      return EmployeeList;
    }
    return EmployeeList.filter(emp =>
      emp.Name.toLocaleLowerCase().includes(EmployeeSearch.toLocaleLowerCase()) ||
      emp.Surname.toLocaleLowerCase().includes(EmployeeSearch.toLocaleLowerCase()) ||
      emp.Gender.toLocaleLowerCase().includes(EmployeeSearch.toLocaleLowerCase())
      );
  }

}
