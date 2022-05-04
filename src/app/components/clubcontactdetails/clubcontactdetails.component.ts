import { Component, OnInit } from '@angular/core';

interface Club {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-clubcontactdetails',
  templateUrl: './clubcontactdetails.component.html',
  styleUrls: ['./clubcontactdetails.component.css'],
})
export class ClubcontactdetailsComponent implements OnInit {
  clubDetails: Club[] = [
    { value: 'yes-0', viewValue: 'Yes' },
    { value: 'no-1', viewValue: 'No' },
  ];
  constructor() {}

  ngOnInit(): void {}

  url = 'https://www.freeiconspng.com/uploads/upload-icon-31.png';
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
  }
}
