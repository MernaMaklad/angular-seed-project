//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-items',
  template: ``
})

export class ItemsComponent implements OnInit{
  constructor(private itemService: ItemsService){}

  ngOnInit(){
    this.itemService.getProducts().subscribe(
      res => {console.log(res)}
    );
  }

}
