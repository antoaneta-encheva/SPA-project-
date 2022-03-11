import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ad} from "../ad/model/ad.model";
import {AuthService} from "../../auth/service/auth.service";
import {User} from "../../auth/model/user.model";
import {style} from "@angular/animations";
import {AdsServices} from "../ad/service/ads.services";

@Component({
  selector: 'app-ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.scss']
})
export class AdItemComponent implements OnInit {

  @Input() ad!: Ad;
  user: User=this.authService.getUserFromStorage();
  ad1!:Ad;
  isVisible: boolean=true;
  isVisible1: boolean=true;

  @Output() onAppliedAd: EventEmitter<number>=new EventEmitter<number>()
  @Output() onLikedAd: EventEmitter<number>= new EventEmitter<number>();
  @Output() adDeleted: EventEmitter<number>=new EventEmitter<number>();

  constructor(private authService:AuthService,
              private adService: AdsServices) { }

  ngOnInit(): void {
  }

  onDelete():void {

    this.adDeleted.emit(this.ad.id);
  }

  onApply():void{
    this.isVisible = false;
    this.onAppliedAd.emit(this.ad.id);
  }

  onLike():void {
    this.isVisible1 = false;

    this.onLikedAd.emit(this.ad.id);

  }
}
