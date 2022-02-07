import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
	const [gastos, setGastos] = useState(
		localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
	);
	const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);
	const [gastoEditar, setGastoEditar] = useState({});

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			mostrarModal();
		}
	}, [gastoEditar]);

	useEffect(() => {
		localStorage.setItem('presupuesto', presupuesto);
	}, [presupuesto]);

	useEffect(() => {
		localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
	}, [gastos]);

	useEffect(() => {
		const presupuestoLS = Number(localStorage.getItem('presupuesto'));
		if (presupuestoLS > 0) {
			setIsValidPresupuesto(true);
		}
	}, []);

	const mostrarModal = () => {
		setModal(true);
		setTimeout(() => {
			setAnimarModal(true);
		}, 500);
	};

	const eliminarGasto = (id) => {
		const gastosFiltrados = gastos.filter((gasto) => gasto.id !== id);
		setGastos(gastosFiltrados);
		console.log(gastosFiltrados);
		console.log(gastos);
	};

	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				gastos={gastos}
			/>
			{isValidPresupuesto && (
				<>
					<main>
						<ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto} />
					</main>
					<div className="nuevo-gasto">
						<img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={mostrarModal} />
					</div>
				</>
			)}

			{modal && (
				<Modal
					setModal={setModal}
					setAnimarModal={setAnimarModal}
					animarModal={animarModal}
					setGastos={setGastos}
					gastos={gastos}
					gastoEditar={gastoEditar}
					setGastoEditar={setGastoEditar}
				/>
			)}
		</div>
	);
}

export default App;
