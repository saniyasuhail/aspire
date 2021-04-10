import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MaterialModule } from "../../assets/material.module";

@NgModule({
  exports: [
    CommonModule,
    //FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //InfiniteScrollModule,
  ],
})
export class SharedModule { }
