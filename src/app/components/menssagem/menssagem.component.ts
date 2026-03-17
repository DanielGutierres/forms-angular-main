import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menssagem',
  templateUrl: './menssagem.component.html',
  styleUrls: ['./menssagem.component.css']
})
export class MenssagemComponent implements OnInit {
  @Input() menssagem =  '';
  constructor() { }

  ngOnInit(): void {
  }

}
