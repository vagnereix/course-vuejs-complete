export default class ProductService {
  getProducts() {
    return fetch('demo/products.json')
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
