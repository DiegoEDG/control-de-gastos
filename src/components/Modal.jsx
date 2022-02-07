import React, { useEffect, useState } from 'react';
import { getId } from '../helpers';
import IconoCerrar from '../img/cerrar.svg';
import { Mensaje } from './Mensaje';

export const Modal = ({ setModal, animarModal, setAnimarModal, setGastos, gastos, gastoEditar, setGastoEditar }) => {
	const [mensaje, setMensaje] = useState('');
	const [gasto, setGasto] = useState({
		nombre: '',
		cantidad: '',
		categoria: ''
	});

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setGasto(gastoEditar);
		}
	}, [gastoEditar]);

	const handleGasto = (e) => {
		setGasto({ ...gasto, [e.target.name]: e.target.value });
	};

	const handleSubmitGastos = (e) => {
		e.preventDefault();
		if (gasto.nombre === '' || gasto.cantidad === '' || gasto.categoria === '') {
			setMensaje('Todos los campos son obligatorios');
			setTimeout(() => {
				setMensaje('');
			}, 3000);
			return;
		} else if (gasto.id) {
			console.log(gasto);
			const gastosActualizados = gastos.map((gastoAlmacenado) =>
				gastoAlmacenado.id === gasto.id ? gasto : gastoAlmacenado
			);

			setGastos(gastosActualizados);
			console.log(gastosActualizados);
		} else {
			gasto.id = getId();
			gasto.fecha = Date.now();
			gasto.cantidad = Number(gasto.cantidad);
			setGastos([gasto, ...gastos]);
		}
		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	const cerrarModal = () => {
		setAnimarModal(false);
		setGastoEditar({});
		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img src={IconoCerrar} alt="cerrar" onClick={cerrarModal} />
			</div>
			<form
				className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
				onSubmit={(e) => {
					handleSubmitGastos(e);
				}}
			>
				<legend>{Object.keys(gastoEditar).length > 0 ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
				<div className="campo">
					<label htmlFor="nombre">Nombre del Gasto</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						placeholder="Nombre del gasto"
						value={gasto.nombre}
						onChange={(e) => {
							handleGasto(e);
						}}
					/>
				</div>
				<div className="campo">
					<label htmlFor="cantidad">Cantidad</label>
					<input
						type="number"
						name="cantidad"
						id="cantidad"
						placeholder="Cantidad"
						value={gasto.cantidad}
						onChange={(e) => {
							handleGasto(e);
						}}
					/>
				</div>
				<div className="campo">
					<label htmlFor="categoria">Categoria</label>
					<select
						name="categoria"
						id="categoria"
						value={gasto.categoria}
						onChange={(e) => {
							handleGasto(e);
						}}
					>
						<option value="">-- Selecciona una categoria --</option>
						<option value="ahorro">Ahorro</option>
						<option value="comida">Comida</option>
						<option value="casa">Casa</option>
						<option value="varios">Gastos Varios</option>
						<option value="ocio">Ocio</option>
						<option value="salud">Salud</option>
						<option value="suscripciones">Suscripciones</option>
					</select>
				</div>
				<input type="submit" value={Object.keys(gastoEditar).length > 0 ? 'Guardar cambios' : 'Agregar gasto'} />
			</form>
		</div>
	);
};
