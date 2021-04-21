import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../core/services/token.service';
import {HttpService} from '../../../../core/services/http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {City, DistrictAddress} from '../../../../models/city';
import {User} from '../../../../models/user';
import {ProfileUserService} from './profile-user.service';
import {DataService} from '../../../../core/data.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  disabledInput = true;
  inForUser = new User();
  updateProfileForm = new FormGroup({
  });
  cityList: City[] = [];
  districtList: DistrictAddress[] = [];
  constructor(
    private dataService: DataService,
    private httpService: HttpService,
    private profileUserService: ProfileUserService
  ) { }

  ngOnInit(): void {
    this.httpService.getInforUser().subscribe( res => {
      this.inForUser = res.data;
    });
    this.profileUserService.initCityList();
    this.profileUserService.$city.subscribe(res => {
      this.cityList = res;
      console.log(this.cityList);
    });
  }

  changeInforUser(): any {
    this.disabledInput = false;
  }

  handleUpdateProfile(): any {

  }

  loadDistrict($event: string): any {
  }

  openDialog(): any {

  }
}
