import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { has, keys, pick } from 'lodash';
import { FadeInTop } from "../shared/animations/fade-in-top.decorator";
import { Product } from "../product/interfaces/product";
import { ProductDataService } from "../product/providers/product-data.service";

@FadeInTop()
@Component({
  selector: 'design-component',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']

})
export class DesignComponent implements OnInit {

  private product: Product;
  searchWidgets: Array<String> = [];
  availableWidgets: Array<Widget> = [];
  selectedWidgets: Array<Widget> = [];
  public oldValue: any;

  private routeState = { design: 'Design', edit: 'Edit' };
  private widgetCollection = [
    { name: "heading", container: "Header", id: 0 },
    { name: "image", container: "Image", id: 1 },
    { name: "description", container: "Description", id: 2 },
    { name: "item", container: "Item Name", id: 4 },
    { name: "GWInGms", container: "GW in grams", id: 5 },
    { name: "netWeight", container: "Net Weight", id: 6 },
    { name: "goldRate", container: "Gold Rate", id: 7 },
    { name: "settingsCharge", container: "Settings Charges", id: 8 },
    { name: "wastage", container: "Wastage", id: 9 },
    { name: "stoneCharges", container: "Stone Charges", id: 10 },
    { name: "totalAmount", container: "Total Amount", id: 11 },
    { name: "discount", container: "Discount", id: 12 },
    { name: "sc", container: "SC", id: 13 },
    { name: "grossAmount", container: "Gross Amount", id: 14 },
    { name: "exDuty", container: "Ex Duty", id: 15 },
    { name: "vat", container: "VAT", id: 16 },
    { name: "cess", container: "CESS", id: 17 },
    { name: "netAmount", container: "Net Amount", id: 18 }
  ];

  designPayload = { heading: '', description: '', itemName: '' };
  showImage = false;

  ngOnInit() {
    if (this.route.snapshot.data['pageTitle'] === this.routeState.design) {
      for (let widget of this.widgetCollection) {
        this.availableWidgets.push(new Widget(widget.name, widget.container, widget.id));
      }
    } else {
      for (let widget of this.widgetCollection) {
        if (has(this.productDataService.selectedProduct, widget.name) && this.productDataService.selectedProduct[widget.name].show) {
          this.selectedWidgets.push(new Widget(widget.name, widget.container, widget.id));
        } else {
          this.availableWidgets.push(new Widget(widget.name, widget.container, widget.id));
        }
      }
    }
  }

  constructor(private route: ActivatedRoute, private productDataService: ProductDataService) {
  }

  pushWidget($event: any, index: number) {
    let newWidget: Widget = $event.dragData;
    this.selectedWidgets.push(new Widget(newWidget.name, newWidget.description, newWidget.index));
    this.selectedWidgets.sort((a: Widget, b: Widget) => {
      return a.index - b.index;
    });
    this.availableWidgets.splice(index, 1);
  }

  pullWidget(index: number) {
    let newWidget: Widget = this.selectedWidgets[index];
    this.availableWidgets.push(new Widget(newWidget.name, newWidget.description, newWidget.index));
    this.availableWidgets.sort((a: Widget, b: Widget) => {
      return a.index - b.index;
    });
    if (newWidget.name === 'image') {
      this.showImage = false;
    }
    this.selectedWidgets.splice(index, 1);
    this.designPayload[newWidget.name] = '';
    this.designPayload['imageUrl'] = '';
  }

  uploadImage(file) {
    this.showImage = true;
    var output = document.getElementById('output');
    if (file) {
      var input = file.target;
      let reader = new FileReader();
      reader.onload = function () {
        let uploadedImage = reader.result;
        //Below lines gives you idea about image show
        output.setAttribute('src', uploadedImage);
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      output.setAttribute('src', this.designPayload['imageUrl']);
    }
  };

  submitDesign() {
    // for (let widget of this.selectedWidgets) {
    //   console.log(widget.name)
    //   console.log(has(this.productDataService.selectedProduct, widget.name));
    //   this.productDataService.selectedProduct[widget.name].show = has(this.selectedWidgets.selectedProduct, widget.name) ? true : false;
    //   // if(has(this.productDataService.selectedProduct, widget.name)){
    //   //   this.productDataService.selectedProduct[widget.name].show = true;
    //   // } else{
    //   //   this.productDataService.selectedProduct[widget.name].show = false;
    //   // }
    // }
    // for (let widget of this.productDataService.selectedProduct) {
    //     this.availableWidgets.push(new Widget(widget.name, widget.container, widget.id));
    //   }
    console.log(this.productDataService.selectedProduct);
  }
}
class Widget {
  constructor(public name: string, public description: string, public index: number) { }
}

class DesignModel {
  constructor(public heading: string, public image: string, public description: string) { }
}
