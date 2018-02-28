import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment'

@Injectable()
export class ItemsService {

  constructor(private httpClient: HttpClient) {
    
   }
   getProducts(){
      return this.httpClient.get(
        environment.apiUrl + '/product/getProducts'
      );
    }

}
