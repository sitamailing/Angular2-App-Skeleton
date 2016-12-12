import {NgModule}      from '@angular/core';

import {HeaderComponent}   from './header.component';
import {MenuModule} from './menu/menu.modules';

@NgModule({
    imports: [MenuModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent]
})
export class HeaderModule {
}
