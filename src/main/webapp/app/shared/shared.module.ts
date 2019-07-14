import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpringBootTestAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SpringBootTestAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SpringBootTestAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringBootTestAppSharedModule {
  static forRoot() {
    return {
      ngModule: SpringBootTestAppSharedModule
    };
  }
}
