import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-subscriptiondetails',
  templateUrl: './subscriptiondetails.component.html',
  styleUrls: ['./subscriptiondetails.component.css'],
})
export class SubscriptiondetailsComponent implements OnInit {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  constructor() {}

  ngOnInit(): void {}
}
