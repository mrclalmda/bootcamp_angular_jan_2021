import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo = 'BootCamp Angular DWC'
  logo = '/assets/angular.png'
  menu:Array<PoMenuItem> = [];
  profileActions: Array<PoToolbarAction> =[];
  profile: PoToolbarProfile ={
    avatar:'',
    title:'',
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.profileActions.push({
      label: 'Logout',
      action:()=>this.logout(),
    });


  this.menu = this.getMenu();

  this.profile = {title:'', avatar:''};

}

  getMenu():Array<PoMenuItem>{
    return[
      {label:'Clientes',
    link:'/home/clientes',},
    ];
  }
  logout(): void {
    this.router.navigate(['login']);
  }
}
