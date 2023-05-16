import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { ItemPage } from "src/app/core/item.page";

@Component({
  selector: "app-player",
  templateUrl: "./player.page.html",
  styleUrls: ["./player.page.scss"],
})
export class PlayerPage extends ItemPage {
  endPoint: string = this.settings.endPoints.players;
  teams: MongoObject[] = [];
  countries: MongoObject[] = [];

  initializePre() {
    this.getTeams();
  }

  getTeams() {
    const endPoint = this.settings.endPoints.teams;
    const endPointCountries = this.settings.endPoints.countries;

    this.pageService
      .httpGetAll(endPoint, { sort: { name: 1 } })
      .then((res) => (this.teams = res.data))
      .catch((e) => this.pageService.showError(e));

      this.pageService
      .httpGetAll(endPointCountries, { sort: { name: 1 } })
      .then((res) => (this.countries = res.data))
      .catch((e) => this.pageService.showError(e));
  }

  getFormNew() {
    return this.formBuilder.group({
      name: [
        null,
        Validators.compose([Validators.min(1), Validators.required]),
      ],
      age: [null, Validators.compose([Validators.min(1), Validators.required])],
      position: [
        null,
        Validators.compose([Validators.min(1), Validators.required]),
      ],

      team: [null, Validators.required],
      country: [
        null,
        Validators.compose([Validators.min(1), Validators.required]),
      ],
    });
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [
        item.name,
        Validators.compose([Validators.min(1), Validators.required]),
      ],
      age: [
        item.age,
        Validators.compose([Validators.min(1), Validators.required]),
      ],
      position: [
        item.position,
        Validators.compose([Validators.min(1), Validators.required]),
      ],
      team: [item.team, Validators.required],
      country: [
        item.country,
        Validators.compose([Validators.min(1), Validators.required]),
      ],
    });
  }
}
