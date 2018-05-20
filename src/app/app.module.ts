import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
'./share/services/angularInmemoryData/in-memory-data.service';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, ShareModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
