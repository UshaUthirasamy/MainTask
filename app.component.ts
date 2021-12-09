import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Main';

  view: any = [];
  View: number = 0;
  returning: boolean = false;
  item: number = 0;
  remove: number = 0;
  message: string = "";
  isOpen: number = 0;
  products: any = [];
  product: any = [{
    image: "https://pyxis.nymag.com/v1/imgs/92c/6dd/1374ebfb94f040f66bea611536c8eb3157-11-cows.rsquare.w1200.jpg",
    name: "cow",
    type: "animal",
    prize: "10000",
    owner: "murugan",
    address: "Erode",
    phone_number: "9090909090",
    password: "hello123$"
  },
  {
    image: "https://www.carlroth.com/medias/NN38-1000Wx1000H?context=bWFzdGVyfGltYWdlc3wxMjUzMTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2hkYi84ODI3Nzk3ODMxNzEwLmpwZ3xiZWE0NjcyNTQzMjEwODI4YWM0YmYxZjM3YWE1ODA5ZTQ4MDgxY2JmNTVlNDhiYjY0ODE3MGNjM2JiOGM4ZDcx",
    name: "fridge",
    type: "thing",
    prize: "5000",
    owner: "Ravi",
    address: "Salem",
    phone_number: "9090999898",
    password: "tttttttttt"
  },
  {
    image: "http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-carrot-early-nantus-desi-vegetable-seeds-16968687419532.jpg?v=1634203403",
    name: "Carrot",
    type: "vegetable",
    prize: "50 per kg",
    owner: "Gayathri",
    address: "Karur",
    phone_number: "9090988888",
    password: "computer123@"
  },
  {
    image: "https://plantogram.com/wa-data/public/shop/products/55/06/655/images/1256/1256.750@2x.jpg",
    name: "mango",
    type: "fruit",
    prize: "80 per kg",
    owner: "Devan",
    address: "Tanjavur",
    phone_number: "9874563210",
    password: "there23#"
  }
  ];

  constructor() {
    this.products = this.product;
  }

  onSubmit(input: string) {
    let l: string = '';
    console.log(input);
    if (input && input.length) {
      l = this.product.filter((element: { type: string; }) => {
        return input.toLowerCase() === element.type.toLowerCase();
      });
      this.products = l;
      if (!l.length) {
        l = this.product.filter((element: { name: string; }) => {
          return input.toLowerCase() === element.name.toLowerCase();
        });
        this.products = l;
        if (!l.length) {
          this.products = this.product;
        }
      }
    } else {
      this.products = this.product;
    }
  }

  addProduct(image: string, name: string, type: string, prize: string, owner: string, address: string, phone: string, password: string) {
    let par = this.product.filter((element: { password: string; }) => {
      return password === element.password;
    });
    if (par && par.length) {
      this.message = "Password already present";
    } else {
      if (image && image.length && name && name.length && type && type.length && prize && prize.length && owner && owner.length && address && address.length && phone && phone.length && password && password.length) {
        this.product.push({
          image: image,
          name: name,
          type: type,
          prize: prize,
          owner: owner,
          address: address,
          phone_number: phone,
          password: password
        });
        this.isOpen = 0;
      }
    }
  }

  Addproduct() {
    this.isOpen = 1;
  }

  closeForm() {
    this.isOpen = 0;
  }

  Remove(item: number) {
    this.item = item;
    this.remove = 1;
  }

  Modal(value: string) {
    console.log("New password....", value);
    if (this.product[this.item].password === value) {
      let l = this.product.filter((element: { password: string; }) => {
        return this.product[this.item].password !== element.password;
      });
      this.product = l;
      this.products = l;
      this.returning = false;
    }
    this.remove = 0;
  }

  viewProduct(item :string) {
    this.view = [];
    this.view.push(item);
    console.log(this.view);
    this.View = 1;
  }

  closeView() {
    this.View = 0;
  }
}
