import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private _couleurFondPreferee : string ;

  constructor() { 
    let c = localStorage.getItem('preferences.couleurFond');
    c=c?c:'lightgrey';
    this._couleurFondPreferee = c;
  }

  public get couleurFondPreferee() :string{
    return this._couleurFondPreferee;
  }

  public set couleurFondPreferee(c:string){
    this._couleurFondPreferee=c;
    localStorage.setItem('preferences.couleurFond',c);
  }

}
