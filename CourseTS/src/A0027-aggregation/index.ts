export class ShoppingCart {
  protected readonly _products: Array<Product>  = [];

  get products(): Array<Product> {
    return this._products;
  }

  insertProduct(...products: Product[]): void{
    if(this._products){
      for(const product of products){
        this._products.push(product);
      }
    }
  }

  amountProducts(): number{
    return this.products.length;
  }

  getTotalValues(){
    if(this.products){
      let values = 0;
      this.products.forEach(product => {
        values += product.value;
      })
      return values;
    }
  }
}

export class Product{
  constructor(
    public name: string,
    public value: number,
  ){}

}

const tShirt = new Product('T-shirt', 50.25)
const food = new Product('food', 50.25)
const cup = new Product('cup', 25.25)
const cart = new ShoppingCart();
cart.insertProduct(tShirt, food, cup);
console.log(cart.products);
console.log(cart.getTotalValues())
console.log(cart.amountProducts())
