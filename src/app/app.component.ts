import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../app/inventory.service'
import { Router } from '@angular/router';
import { Inventory } from './inventory';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ldb-poc';
  inventories: Inventory[];
  displayedColumns: string[] = ['numberOfStores', 'store', 'sku', 'available'];
  headElements = ['numberOfStores', 'store', 'sku', 'available'];
  resultsLength = 0;

  constructor(private inventoryService:InventoryService, private router: Router) {

  }

  ngOnInit(): void {
    this.getInventoryList();   
  }

  private getInventoryList(){
    console.log('get poc list ...')
    this.inventoryService.getInventory().subscribe(data => {
      this.inventories = data;
    })
    console.log('poc list: ' + this.inventories)
  }
}
