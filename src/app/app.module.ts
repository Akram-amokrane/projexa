import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({ "projectId": "projexa-c658e", "appId": "1:958658919148:web:908656da6791cd638b83c9", "databaseURL": "https://projexa-c658e-default-rtdb.europe-west1.firebasedatabase.app", "storageBucket": "projexa-c658e.appspot.com", "apiKey": "AIzaSyCFHub-czQ-QAjsdkg0erobLDBEq6UYvgM", "authDomain": "projexa-c658e.firebaseapp.com", "messagingSenderId": "958658919148", "measurementId": "G-DY07V1K3DC" })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    //provideAppCheck(() => {
    // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
    //const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
    //return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    //}),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
