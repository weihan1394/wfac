import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { KeycloakService } from "../../core/auth/keycloak.service";

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.scss']
})
export class RequestPageComponent implements OnInit {

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
