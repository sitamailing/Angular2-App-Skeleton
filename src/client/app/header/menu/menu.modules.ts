import {NgModule}      from '@angular/core';
import {RouterModule} from '@angular/router';

import {MenuComponent}   from './menu.component';

@NgModule({
    imports: [RouterModule],
    exports: [MenuComponent],
    declarations: [MenuComponent]
})
export class MenuModule {
}
