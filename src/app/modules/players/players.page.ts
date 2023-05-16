import { Component } from '@angular/core';
import { ItemsPage } from 'src/app/core/items.page';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage extends ItemsPage {

  endPoint: string = this.settings.endPoints.players;
  title: string = 'Jugadores';

  count = 6;

  options: TableOptions = {
    detailPageName: 'player',
    handleEnable: false,
    columns: [
      {
        label: 'Nombre',
        code: 'name',
        type: 'text'
      },
      {
        label: 'Edad',
        code: 'age',
        type: 'text'
      },
      {
        label: 'Posicion',
        code: 'position',
        type: 'text'
      },
      {
        label: 'Pais',
        code: 'country',
        type: 'text'
      },
      {
        label: 'Team',
        code: 'team',
        type: 'text'
      },
    ]
  }

}
