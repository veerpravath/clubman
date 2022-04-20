import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-categoryconversion',
  templateUrl: './categoryconversion.component.html',
  styleUrls: ['./categoryconversion.component.css'],
})
export class CategoryconversionComponent implements OnInit {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  constructor() {}

  ngOnInit(): void {}
}
