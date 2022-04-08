import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    IconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
  ],
  exports: [
    IconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
