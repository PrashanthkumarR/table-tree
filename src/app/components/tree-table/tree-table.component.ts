import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-tree-table',
  inputs: ['item'],
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss'],
})
export class TreeTableComponent implements OnInit {
  @Input() item: any;
  @Input() index: number = 0;
  

  constructor(private elRef: ElementRef, private cd:ChangeDetectorRef) {}

  ngOnInit(): void {
   
  }

  getFornWeight(item: any, index: number | undefined) {
    if (item.children && (index == 0 || item.expand)) {
      return 600;
    } else if (item.children && !item.expand) {
      return 500;
    } else {
      return 100;
    }
  }

  selectIrisk(node: any, data: any, event: any) { 
    // if (node) {
    //   for (let child of node) {
    //     child.irisk = event.currentTarget.checked;
    //     if (
    //       child.children &&
    //       Array.isArray(child.children) &&
    //       child.children.length > 0
    //     )
    //       this.selectIrisk(child.children, child, event);
    //   }
    // } else {
    //   data.irisk = event.currentTarget.checked;
    // }
    // this.cd.detectChanges()
  }

  selectIsupplier(node: any, data: any, event: any) {
    if (node) {
      for (let child of node) {
        child.isupplier = event.currentTarget.checked;
        if (
          child.children &&
          Array.isArray(child.children) &&
          child.children.length > 0
        )
          this.selectIsupplier(child.children, child, event);
      }
    } else {
      data.irisk = event.currentTarget.checked;
    }
  }

  childrenSelected(e) {
    console.log(e);
  }

  childrenByNode(index, item) {
    return item.children;
  }
}
