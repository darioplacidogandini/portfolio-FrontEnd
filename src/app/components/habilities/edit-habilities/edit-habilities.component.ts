import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hability } from 'src/app/model/hability.model';
import { HabilitiesService } from 'src/app/services/habilities.service';

@Component({
  selector: 'app-edit-habilities',
  templateUrl: './edit-habilities.component.html',
  styleUrls: ['./edit-habilities.component.css']
})
export class EditHabilitiesComponent implements OnInit {

  constructor(private habilitiesService:HabilitiesService,private route:Router) {}

  id:number = 0;
  habilities:Hability = new Hability();

  ngOnInit(): void {
    this.id = this.habilitiesService.id;
    this.habilitiesService.search(this.id).subscribe(data => {
      this.habilities = data;
    }, error => console.log(error));
  }

  public saveChanges() {
    this.habilitiesService.edit(this.id,this.habilities).subscribe(data => {
      console.log(data);
      this.habilitiesService.list();
    },error => console.log(error));
    this.route.navigate(['']);
    window.location.reload();
  }
}
