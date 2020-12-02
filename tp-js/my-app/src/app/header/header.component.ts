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

  public couleurFondPrefereeLocale : string = "lightgrey";

  constructor(private _preferencesService : PreferencesService) {
    //synchronisation de la "copie locale":
    this._preferencesService.couleurFondPrefereeObservable
    .subscribe(
      //callback qui sera éventuellement re-déclenchée plusieurs fois:
      (couleurFondPreferee)=>{
          console.log("nouvelle couleurFondPreferee="+couleurFondPreferee)
          this.couleurFondPrefereeLocale=couleurFondPreferee;}
    );
   }

  ngOnInit(): void {
  }

}
