import { useState } from "react";
import Button from "./components/Button";

import ProductDashboard from "./components/ProductDashboard";
import ProductList from "./components/ProductList";
import ButtonDashboard from "./components/ButtonDashboard";

import Separator from "./components/Separator";

import CruscottoProdotti from "./components/CruscottoProdotti";
import ElencoProdotti from "./components/ElencoProdotti";
import Pulsante from "./components/Pulsante";

import "./App.css";

// los hooks no pueden estar fuera de un componente
// los hooks siempre tienen que estar en el nivel más alto del componente

// canda vez que se renderiza un componente, se ejecuta todo el código del componente

function App() {
	// crea array de productos "prodotto" para el ejercicio de un segundo dashboard
	const [prodotti, setProdotti] = useState([
		{
			id: Math.random().toString(),
			name: "iPhone",
		},
	]);

	// función para agregar un prodotto a la lista
	const aggiungiProdotto = () => {
		setProdotti([
			{
				id: Math.random().toString(),
				name: "Xiaomi",
			},
			...prodotti,
		]);
	};

	const aggiungiProdottoFinale = () => {
		setProdotti([
			...prodotti,
			{
				id: Math.random().toString(),
				name: "Samsung",
			},
		]);
	};

	const rimuoviProdotto = () => {
		setProdotti([...prodotti.slice(0, -1)]);
	};

	const vacearProdotti = () => {
		setProdotti([]);
	};

	// crea array de productos para dashboard
	const [productos, setProductos] = useState([
		{
			id: 1,
			name: "iPhone",
		},
	]);

	const handleClickButtonDashboard = () => {
		setProductos([...productos, { id: 2, name: "Samsung" }]);
	};

	const [count, setCount] = useState(0);
	const [sent, setSent] = useState(false);

	// mutabilidad e inmutabilidad
	// creo un array de productos
	const [products, setProducts] = useState([{ name: "iPhone" }]);

	// creo un objecto de productos
	const [product, setProduct] = useState({
		name: "iPhone 14",
		stock: 25,
		address: {
			number: 42,
			street: "Queen st",
			door: "5A",
		},
	});

	const [productsArray, setProductsArray] = useState([
		{
			id: 1,
			name: "iPhone 15",
		},
	]);

	const handleClick = (): void => {
		setCount(count + 1);
		setSent(!sent);
		console.log("Handle Click", count, sent);
	};

	const handleClickAdd = (): void => {
		setProducts((products) => [...products, { name: "Samsung" }]);
	};

	const handleClickPhone = (): void => {
		const newProduct = {
			...product,
			name: "Samsung",
			address: {
				...product.address,
				number: 45,
			},
		};

		setProduct(newProduct);
	};

	const addProductAtTheEnd = () => {
		// paso el nuevo producto al final
		setProductsArray((productsArray) => [
			...productsArray,
			{ id: 2, name: "Samsung" },
		]);
	};

	const addProductAtTheStart = () => {
		// paso el nuevo producto al comienzo
		setProductsArray((productsArray) => [
			{ id: 3, name: "Xiaomi" },
			...productsArray,
		]);
	};

	const modifyProduct = () => {
		// modifico un product
		setProductsArray((products) =>
			products.map((product) =>
				product.id == 1 ? { ...product, name: "iPhone 16" } : { ...product },
			),
		);
	};

	const delProduct = () => {
		// elimino un producto
		setProductsArray((products) =>
			products.filter((product) => product.id != 1),
		);
	};

	return (
		<>
			<div>
				<ProductDashboard amount={productos.length} />
				<ButtonDashboard handleClick={handleClickButtonDashboard}>
					Enviar
				</ButtonDashboard>
				<ProductList products={productos} />
			</div>
			<Separator />
			<div>
				<CruscottoProdotti importo={prodotti.length} />
				<Pulsante gestioneClick={aggiungiProdotto}>Comienzo</Pulsante>
				<Pulsante gestioneClick={aggiungiProdottoFinale}>Final</Pulsante>
				<Pulsante gestioneClick={rimuoviProdotto}>Eliminar</Pulsante>
				<Pulsante gestioneClick={vacearProdotti}>Limpiar</Pulsante>
				<ElencoProdotti prodotti={prodotti} />
			</div>
			<Separator />
			<div>
				<button onClick={handleClick}>Enviar</button>
			</div>
			<div style={{ marginTop: 20 }}>
				<button onClick={handleClickAdd}>Agregar</button>
				<ul>
					{products.map((product) => (
						<li key={product.name}>{product.name}</li>
					))}
				</ul>
			</div>
			<div style={{ marginTop: 20 }}>
				<button onClick={handleClickPhone}>Update</button>
				<p>
					{product.name} {product.address.number}
				</p>
			</div>
			<div style={{ marginTop: 20 }}>
				<Button handleClick={addProductAtTheEnd}>Agregar al final</Button>

				<Button handleClick={addProductAtTheStart}>Agregar al comienzo</Button>

				<Button handleClick={modifyProduct}>Modificar producto</Button>

				<Button handleClick={delProduct}>Eliminar producto</Button>

				<ul>
					{productsArray.map((product) => (
						<li key={product.id}>{product.name}</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
