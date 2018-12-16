import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter();


  onSelect(feature) {
    console.log('feature', feature)
    this.featureSelected.emit(feature);
  }
}
