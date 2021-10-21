import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt: string = 'Não';
  @Input() okTxt: string = 'Sim';

  constructor() { }

  ngOnInit() {
  }

  onClose(){

  }

}
