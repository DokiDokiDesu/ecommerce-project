import { Header } from "../../components/Header";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  //useState ile backend'den alınan veri kullanılır.

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []); //dependency array boş bırakıldığı için sadece 1 kere çalışır.

  //useEffect kullanılarak backend'den veri çekme   işleminin her renderda tekrarlanması önlenir.

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
