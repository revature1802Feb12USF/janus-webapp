import { Component, OnInit, OnDestroy } from '@angular/core';
import { HydraCategoryService } from '../../../hydra-client/category/hydra-category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private hydraCategoryService: HydraCategoryService) { }

  ngOnInit() {
    alert(this.hydraCategoryService.test);
  }

  ngOnDestroy() {}
}
