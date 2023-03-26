import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import material module
import { MaterialModule } from '../material.module';

// import image components
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ImageGridComponent, ImageUploadComponent],
  exports: [ImageGridComponent, ImageUploadComponent],
})
export class ImageComponentModule {}
