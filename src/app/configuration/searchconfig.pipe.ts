import { Pipe, PipeTransform } from '@angular/core';
import { Configuration } from './configuration';

@Pipe({
  name: 'searchconfig'
})
export class SearchconfigPipe implements PipeTransform {

  transform(ConfigurationList: Configuration[], ConfigSearch: string): Configuration[] {
    if (!ConfigurationList || !ConfigSearch){
      return ConfigurationList;
    }
    return ConfigurationList.filter(config => 
      config.Configuration.toLocaleLowerCase().includes(ConfigSearch.toLocaleLowerCase()) || 
      config.Description.toLocaleLowerCase().includes(ConfigSearch.toLocaleLowerCase()) 
      );
  }
}
