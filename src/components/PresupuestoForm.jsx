import React, { useState } from 'react';
import { Mensaje } from './Mensaje';

export const PresupuestoForm = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
	const [mensaje, setMensaje] = useState('');

	const handlePresupuesto = (e) => {
		e.preventDefault();

		if (!presupuesto || presupuesto < 0) {
			setMensaje('No es un presupuesto válido');
			return;
		}
		setMensaje('');
		setIsValidPresupuesto(true);
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<form className="formulario" onSubmit={handlePresupuesto}>
				<div className="campo">
					<label>Define tu presupuesto</label>
					<input
						className="nuevo-presupuesto"
						type="number"
						placeholder="$$$"
						value={presupuesto}
						onChange={(e) => setPresupuesto(Number(e.target.value))}
					/>
				</div>
				<input type="submit" value="Agregar" />
				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
			</form>
		</div>
	);
};
