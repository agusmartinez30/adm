import { NgModule } from '@angular/core';
import { SanitizeHTMLPipe } from './sanitizeHTML/sanitizeHTML.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    SanitizeHTMLPipe
  ],
  entryComponents: [
  ],
  imports: [
  ],
  exports: [
    TruncatePipe,
    SanitizeHTMLPipe
  ],
  providers: [
  ]
})
export class PipesModule { }
