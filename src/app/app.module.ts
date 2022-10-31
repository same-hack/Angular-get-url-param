import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule, MyRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
