import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ItemPage } from 'src/app/core/item.page';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage extends ItemPage {

  endPoint: string = this.settings.endPoints.teams;

  getFormNew() {
    return this.formBuilder.group({
      name: [null, Validators.compose([Validators.min(1), Validators.required])],
      location: [null, Validators.compose([Validators.min(1), Validators.required])],
      fundation: [null, Validators.compose([Validators.min(1), Validators.required])],
    });
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name, Validators.compose([Validators.min(1), Validators.required])],
      location: [item.location, Validators.compose([Validators.min(1), Validators.required])],
      fundation: [item.fundation, Validators.compose([Validators.min(1), Validators.required])],
    });
  }

}
