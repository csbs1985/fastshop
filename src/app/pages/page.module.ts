import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [HomeComponent, MovieComponent],
  exports: [HomeComponent, MovieComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
