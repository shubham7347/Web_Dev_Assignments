function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    }
  }

  // Sample array of products
const products = [
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Books' },
    { name: 'Product 3', category: 'Electronics' },
    { name: 'Product 4', category: 'Clothing' },
    { name: 'Product 5', category: 'Books' }
  ];
  
  // Create a filter function for the 'Books' category
  const filterByCategory = filterProductsByCategory(products);
  const filteredProducts = filterByCategory('Books');
  
  console.log(filteredProducts);
  // Output: [{ name: 'Product 2', category: 'Books' }, { name: 'Product 5', category: 'Books' }]