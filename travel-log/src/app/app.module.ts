import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// TODO: import Angular's httpClientModule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorProvider } from './auth/auth-interceptor.service';

// TODO: import the ionic storage module.
import { IonicStorageModule } from '@ionic/storage';

// TODO: Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';

// TODO: Leafleft
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// TODO: Camera
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, // TODO: add Angular's httpClientModule to your module imports
    IonicStorageModule.forRoot(), // TODO: add the ionic storage module into the app's module.
    LeafletModule.forRoot(), // TODO: Module Leafleft
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}