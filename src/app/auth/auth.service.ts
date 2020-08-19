import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router) {
  }
  loginEmailUser(email, password, remember: boolean = false) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => {
        this.router.navigate(['/dashboard']);
      });
  }
  registerUser(user) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then((userData: any) => {
          const userCollection = this.afs.collection('users');
          userCollection.doc(userData.user.uid).set({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          });
          resolve(user);
        }).catch(err => reject(err));
    });
  }
}
