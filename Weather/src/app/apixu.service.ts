import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http:HttpClient) { }
  getWeather(location){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=feaea1886fb84875a26224112190305&q=' + location)

}
}
