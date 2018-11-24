import { Component, OnInit } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';
import { VALID } from '@angular/forms/src/model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  po: any;
  receipt: any;
  item: any;
   po_table: boolean=false;
   receipt_table: boolean=false;
   item_table: boolean=false;
   items_tag: boolean=true; 

   isChecked =true;
  constructor() { }

  ngOnInit() {
    
  
  }

  

searchData(){
    alert(this.po);
    if(this.po !=undefined && this.po !='' ){
    this.po_table=true;
    }
    if(this.receipt !=undefined && this.receipt !='' ){
      this.receipt_table=true;
    }
    if(this.item !=undefined && this.item !='' ){
        this.item_table=true;
    }
}

onChange(val: any)
{
  if(val=="races")
  {
    this.items_tag=false;
  }
  else{
    this.items_tag=true;
  }
}


}
