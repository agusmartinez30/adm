import { Component } from "@angular/core";
import { ItemsPage } from "src/app/core/items.page";

@Component({
  selector: "app-activities",
  templateUrl: "./activities.page.html",
  styleUrls: ["./activities.page.scss"],
})
export class ActivitiesPage extends ItemsPage {
  endPoint: string = this.settings.endPoints.activities;
  title: string = "Etapas";
  stages: MongoObject[] = [];
  count = 6;

  options: TableOptions = {
    detailPageName: "activity",
    handleEnable: false,
    columns: [
      {
        label: "Nombre",
        code: "description",
        type: "text",
      },
      {
        label: "Etapa",
        code: "stage",
        type: "text",
        specialFormat: (row) => `${row?.stage?.name}`,
      },
      {
        label: "Fecha de Inicio",
        code: "startDate",
        type: "date",
        format: "dd/MM/yyyy",
      },
      {
        label: "Fecha de finalizacion",
        code: "endDate",
        type: "date",
        format: "dd/MM/yyyy",
      },
      {
        label: "Responsable",
        code: "employee",
        type: "text",
        specialFormat: (row) => `${row?.employee?.name}`,
      },
    ],
  };

  initializePre(): void {
    this.getStages();
  }

  getStages() {
    const endPoint = this.settings.endPoints.stages;

    this.pageService
      .httpGetAll(endPoint, { sort: { name: 1 } })
      .then((res) => {
        this.stages = res.data;
      })
      .catch((e) => this.pageService.showError(e));
  }

  getParams(): Partial<EndPointParams> {
    const filters = { ...this.handleTextSearch() };
    const populates = ["stage", "employee"];
    const sort = { updatedAt: -1 };

    console.log(populates)
    

    return { filters, populates, sort };
  }

  handleTextSearch(): { [k: string]: any } {
    return this.textSearch ? { $or: [{ stage : this.textSearch }] } : {};
  }

  getItem() {
    if (!this.textSearch) return this.getItems();

    if (this.textSearch.length !== 24) {
      this.items = [];
      this.hasMorePages = false;
      return;
    }

    this.pageService
      .httpGetOne(this.endPoint, {
        id: this.textSearch,
        populates: ["employee", "stage"],
      })
      .then((res) => {
        this.items = [res.data];
        this.hasMorePages = false;
      })
      .catch((e) => {
        this.items = [];
        this.hasMorePages = false;
      });
  }
}
