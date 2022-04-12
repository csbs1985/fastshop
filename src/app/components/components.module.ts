import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { LeadersComponent } from './leaders/leaders.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { CastComponent } from './cast/cast.component';

@NgModule({
  declarations: [
    IconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
    LeadersComponent,
    GalleryComponent,
    MenuComponent,
    MovieHeaderComponent,
    CastComponent,
  ],
  exports: [
    IconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
    LeadersComponent,
    GalleryComponent,
    MenuComponent,
    MovieHeaderComponent,
    CastComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
