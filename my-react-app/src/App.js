import data from "./Data";


function App() {
  return (
    <div >
      <header >
        <a href="/">amazon</a>
      </header>
        <h1>featured product</h1>
        {data.products.map(product=>(<div>
          <img src={product.image} alt={product.name}/>
          <p>
            {product.name}
          </p>
          <p>
            {product.price}
          </p>
        </div>))}
      <main>
      </main>
    </div>
  );
}

export default App;
