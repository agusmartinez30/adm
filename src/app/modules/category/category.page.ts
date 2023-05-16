import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage extends ItemPage {

  endPoint: string = this.settings.endPoints.construya;

  getFormNew() {
    return this.formBuilder.group({
      month: [null, Validators.compose([Validators.min(1), Validators.max(12), Validators.required])],
      year: [null, Validators.required],
      seasonallyAdjustedIndex: [null, Validators.required],
      monthlyVariation: [null, Validators.compose([Validators.min(-100), Validators.max(100), Validators.required])],
    });
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      month: [item.month, Validators.compose([Validators.min(1), Validators.max(12), Validators.required])],
      year: [item.year, Validators.required],
      seasonallyAdjustedIndex: [item.seasonallyAdjustedIndex, Validators.required],
      monthlyVariation: [item.monthlyVariation, Validators.compose([Validators.min(-100), Validators.max(100), Validators.required])],
    });
  }

}
