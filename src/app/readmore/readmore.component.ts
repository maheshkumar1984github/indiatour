import { Component,OnInit, Input, EventEmitter,OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrl: './readmore.component.scss'
})
export class ReadmoreComponent implements OnChanges  {
  @Input() text: string = '';
  showReadMore: boolean = false;
  isCollapsed: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
