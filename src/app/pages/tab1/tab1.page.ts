import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor( private UsersService: UsersService) {}

  ngOnInit() {

    this.UsersService.getUsers()
    .subscribe(response =>{
      console.log(response);
    });
  }

}
