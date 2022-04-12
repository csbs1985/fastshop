import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [HomeComponent, MovieComponent, PersonComponent],
  exports: [HomeComponent, MovieComponent, PersonComponent],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class PagesModule {}
