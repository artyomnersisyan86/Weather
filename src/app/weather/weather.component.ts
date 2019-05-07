import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;//to which you'll assign the retrieved JSON data from the API
  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData =data;
      console.log(this.weatherData);
      this.weatherSearchForm.reset();
      });
  }

}
