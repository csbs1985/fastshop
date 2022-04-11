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

@NgModule({
  declarations: [
    IconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
    LeadersComponent,
    GalleryComponent,
  ],
  exports: [
    IconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
    LeadersComponent,
    GalleryComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
