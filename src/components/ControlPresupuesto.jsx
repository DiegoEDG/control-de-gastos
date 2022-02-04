import React from 'react';

export const ControlPresupuesto = ({ presupuesto }) => {
	const formatearCatidad = (cantidad) => {
		return cantidad.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	};
	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<p>Gráfica</p>
			</div>
			<div className="contenido-presupuesto">
				<p>
					<span>Presupuesto: </span>
					{formatearCatidad(presupuesto)}
				</p>
				<p>
					<span>Disponible: </span>
					{formatearCatidad(0)}
				</p>
				<p>
					<span>Gastado: </span>
					{formatearCatidad(0)}
				</p>
			</div>
		</div>
	);
};
