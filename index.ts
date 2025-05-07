function formatString(input: string, toUpper?: boolean): string {
  if (input && (toUpper || toUpper === undefined)) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

// console.log(formatString("Hello"));
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
//   { title: "jdjsd", rating: 4 },
//   { title: "jdjsd", rating: 4.1 },
//   { title: "jdjsd", rating: 3.9 },
// ];

// console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// console.log(concatenateArrays([1, "2"], [3, 4], [5],["Hamim"],["hamim","rakib","pokib"]));

class Vehicle {
  constructor(private make: string, public year: number) {}
  getInfo() {
    return `Make: ${this.make} , Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

// const myCar = new Car("Toyota", 2022, "Camry");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

// console.log(processValue(9))

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  console.log(products.length);
  if (products.length > 0) {
    console.log(products.length);
    let maxPrice: number = Math.max(...products.map((p) => p.price));
    return products.filter((p) => p.price === maxPrice)[0];
  }
  return null;
}

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
// ];
// console.log(getMostExpensiveProduct([]));
// Output: { name: "Bag", price: 50 }
