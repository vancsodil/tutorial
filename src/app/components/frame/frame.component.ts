import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  constructor(private partnerService: PartnerService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.partnerService.logout();
    this.router.navigateByUrl("/login");
  }

}
