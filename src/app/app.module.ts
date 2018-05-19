import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
'./share/services/angularInmemoryData/in-memory-data.service';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, BrowserAnimationsModule, ShareModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
