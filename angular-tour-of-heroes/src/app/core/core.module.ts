import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
// Prevent more than 1 loading of core
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    imports: [CommonModule],
    declarations: [
    ],
    providers: [LoggerService],
    exports: [
        CommonModule,
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
