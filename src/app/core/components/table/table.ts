import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { IonFab } from '@ionic/angular';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { RequiredInput } from 'src/app/core/decorators/required-input.decorator'
import { BasePage } from '../../base.page';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.scss'],
})
export class TablePage extends BasePage {

  @ViewChildren('fabComponent') query: QueryList<IonFab>;

  @Input() @RequiredInput options: TableOptions;

  @Input() @RequiredInput items: MongoObject[];
  @Input() @RequiredInput page: number;
  @Input() @RequiredInput count: number;

  @Output() onButtonClick = new EventEmitter<{ item: MongoObject, column: TableColumn }>()
  @Output() onCheckBoxChange = new EventEmitter<{ item: MongoObject, column: TableColumn }>()
  @Output() onPageChange = new EventEmitter<number>()
  @Output() onEnabledChange = new EventEmitter<MongoObject>()

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  tableMessages = {
    emptyMessage: 'No se encontró ningún elemento.',
    selectedMessage: 'seleccionado',
    totalMessage: 'total'
  };

  ngOnInit() {
    if (!this.options) return;
    
    if (!this.options.perPage) this.options.perPage = 20;
  }

  handleCheckbox(item: MongoObject, column: TableColumn) {
    this.onCheckBoxChange.emit({ item, column });
  }

  handleButton(item: MongoObject, column: TableColumn) {
    this.onButtonClick.emit({ item, column });
  }

  handleEnable(item: MongoObject) {
    this.onEnabledChange.emit(item);
  }

  handleTablePage(offset: number) {
    this.onPageChange.emit(offset);
  }

  toggle(col: TableColumn) {
    this.isChecked(col)
      ? this.options.columns = this.options.columns.filter(c => c.label !== col.label)
      : this.options.columns.splice(col.index, 0, col);
  }

  isChecked(col: TableColumn) {
    return this.options.columns.some(column => column.label === col.label);
  }

  closeAll() {
    this.query.forEach(item => {
      if (item.activated) setTimeout(() => item.close());
    });
  }

  goToDetail(id: string, action: 'watch' | 'edit') {
    this.pageService.navigateRoute(`${this.options.detailPageName}/${action}/${id}`);
  }

}
