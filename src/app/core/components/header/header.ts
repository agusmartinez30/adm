import { Component, Input } from '@angular/core';
import { RequiredInput } from 'src/app/core/decorators/required-input.decorator'
import { BasePage } from '../../base.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderPage extends BasePage {

  @Input() @RequiredInput title: string;

}
