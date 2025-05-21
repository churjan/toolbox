import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from './ng-zorro-antd.module';

@NgModule({
  imports: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgZorroAntdModule],
})
export class SharedModule {}
