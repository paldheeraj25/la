import {NgModule} from '@angular/core';
import {DesignComponent} from './design.component';
import { designRouting } from "./design.routing";
import {SmartadminModule} from '../shared/smartadmin.module';
import {DndModule} from 'ng2-dnd';
import { JewelDesignDataService } from './providers/jewel-design-data.service';
import { UtilsModule } from "../shared/utils.module";

@NgModule({
  imports: [
    SmartadminModule,
    designRouting,
    DndModule.forRoot()
  ],
  declarations: [DesignComponent],
  providers: [JewelDesignDataService],
})
export class DesignModule {

}