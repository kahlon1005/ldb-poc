import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inventory } from '../app/inventory';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url = 'https://apimgm-realtimeinventory-poc-01.azure-api.net/V1/api/Retail/availability/sum';

  constructor(private httpClient: HttpClient) { }

  getInventory():Observable<Inventory[]>{    
    const headers = new HttpHeaders({'Ocp-Apim-Subscription-Key': 'f883b5ade78443a2a29fad78bd4a8220'});
    return this.httpClient.get<Inventory[]>(`${this.url}`, {headers: headers});
  }
}
