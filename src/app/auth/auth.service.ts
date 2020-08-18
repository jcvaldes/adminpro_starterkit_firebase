import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

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
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((userData: any) => {
        // this.sendVerificationMail();
        const userCollection = this.afs.collection('users');
        userCollection.doc(userData.user.uid).set({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          photoUrl: user.photoUrl,
          role: user.role,
        });
      });
  }

}
