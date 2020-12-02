import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myMenuDefs  :MenuDefinition[] = [
    { label : "autres" , 
      children : [
        { label : "login" , path : "ngr-login" } ,
        { label : "conversion" , path : "ngr-conversion" },
        { divider : true },
        { label : "admin-devise" , path : "ngr-admin-devise" }
      ]
    },
    { label : "welcome" , path : "ngr-welcome" } , 
    { label : "basic" , path : "ngr-basic" }
    ];

  @Input()
  public titre :string = "titreParDefaut";

  constructor(public preferencesService : PreferencesService) {
    console.log("dans constructeur, titre="+this.titre);
   }

  //ngOnInit() est un équivalent à @PostConstruct de javaEE
  ngOnInit(): void {
    console.log("dans ngOnInit, titre="+this.titre);
  }

}
