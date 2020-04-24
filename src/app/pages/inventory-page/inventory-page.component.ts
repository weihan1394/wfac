import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { KeycloakService } from "../../core/auth/keycloak.service";

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  username: String;
  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');
    
    // prevent the error message ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    this.changeDetectorRef.detectChanges();
  }

  getKeycloakService() {
    return KeycloakService
  }

}
