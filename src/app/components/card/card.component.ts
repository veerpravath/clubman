import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditionalmodalComponent } from '../additionalmodal/additionalmodal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
 openDialog() {
    const dialogRef = this.dialog.open(AdditionalmodalComponent);

 }
  ngOnInit(): void {}
}