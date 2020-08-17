import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }
  loginEmailUser(email, password, remember: boolean = false) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => {
        this.router.navigate(['/dashboard']);
    });
  }

}
