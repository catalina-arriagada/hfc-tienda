import React from "react";
import Link from "next/link";
import dotenv from 'dotenv';
dotenv.config();

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/productos`);
    if (!res.ok) {
      throw new Error(`Error al obtener los productos: ${res.statusText}`);
    }
    const productos = await res.json();
    return {
      props: {
        productos,
      },
    };
  } catch (error) {
    console.error('Error en getServerSideProps:', error);
    return {
      props: {
        productos: [],
        error: error.message || 'Error desconocido',
      },
    };
  }
}


const Productos = ({ productos = [] }) => {
  if (!productos.length) {
    return <div>No hay productos disponibles</div>;
  }
  return (
    <main className="main">
      <section className="product__title">
        <h3 className="design__title">Productos</h3>
      </section>
      <div className="container-design">
        {productos.map((producto) => (
          <div className="design__item" key={producto.id}>
            <Link href={`/productos/${encodeURIComponent(producto.id)}`}>
              <img
                className="design__img"
                src="img/productos/1o.jpg"
                alt={producto.nombre}
              />
              <div>
                <p className="design__title">
                  {producto.nombre}
                  <br />
                  <br />
                  ${producto.precio}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Productos;
