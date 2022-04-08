import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [IconComponent, HeaderComponent],
  exports: [IconComponent, HeaderComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
