import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import { SmartadminModule } from "../shared/smartadmin.module";
import { HomeComponent } from "./home.component";
import { CollegeComponent } from './college/college.component';
import { CompanyComponent } from './company/company.component';
import { StudentComponent } from './student/student.component';
import { FileUtil } from './college/file.util';

// services
import { CollegeService } from './providers/college.service';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SmartadminModule
  ],
  providers: [FileUtil, CollegeService],
  declarations: [HomeComponent, CollegeComponent, CompanyComponent, StudentComponent]
})
export class HomeModule { }
