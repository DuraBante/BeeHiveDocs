import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatGridListModule, MatTabsModule, MatMenuModule, MatCardModule, MatStepperModule, MatRadioModule, MatRadioGroup, MatExpansionModule, MatButtonToggleModule, MatPaginatorModule, MatSnackBarModule, MatTableModule, MatProgressSpinnerModule, MatSliderModule, MatSlideToggleModule, MatChipsModule, MatBottomSheetModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatProgressBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

var mods = [CommonModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule,
MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatGridListModule, MatTabsModule, MatMenuModule, MatCardModule, MatStepperModule,
MatRadioModule, MatExpansionModule, MatButtonToggleModule, MatPaginatorModule, MatSnackBarModule, MatCheckboxModule, MatTableModule,
MatProgressSpinnerModule, MatSliderModule, MatSlideToggleModule, MatChipsModule, MatBottomSheetModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule,
MatProgressBarModule];



@NgModule({
  declarations: [],
  imports: mods,
  exports: mods,
  entryComponents: []
})
export class BeeHiveComponentsModule { }
