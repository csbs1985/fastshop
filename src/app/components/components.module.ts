import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [IconComponent, HeaderComponent, BannerComponent],
  exports: [IconComponent, HeaderComponent, BannerComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
