import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';
import { MapBasePage } from 'src/app/core/map-base.page';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage extends MapBasePage {

  endPoint: string = this.settings.endPoints.construya;

  value: any = 'person';

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

  onChangeSearchLocation() {

    if (this.address.address.trim()) return;

    this.address.location = { coordinates: [0, 0], type: 'Point' };
  }

  openFile(file: string) {
    window.open(file, '_blank');
  }

  deleteFile(file: string, field: string) {
    this.form.patchValue({ [field]: this.form.value[field].filter(f => f !== file) });
  }

  handlePictures() {
    this.pageService.showImageUpload()
      .then(res => {
        if (res?.data?.file) this.form.patchValue({ pictures: [...this.form.value.pictures, res.data.file] });
      }).catch(e => this.pageService.showError(e));
  }

}
