import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray:any = [];
    if(!value || filterString === '' || propName === '')
    {
      return value;
    }

    value.forEach((item: any)=>{
      if(item[propName] === filterString)
      {
        resultArray.push(item);
      }
      else if(item[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        resultArray.push(item)
      }
    });
    /* else 
    {
    for(const item of value){
      if(item[propName] === filterString)
      {
        resultArray.push(item);
      }
    } */
    return resultArray;
  }
}