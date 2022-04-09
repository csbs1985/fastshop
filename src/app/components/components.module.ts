import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { LeadersComponent } from './leaders/leaders.component';

@NgModule({
  declarations: [
    IconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
    LeadersComponent,
  ],
  exports: [
    IconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
    LeadersComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
