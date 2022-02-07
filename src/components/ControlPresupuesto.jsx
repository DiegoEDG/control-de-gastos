import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlPresupuesto = ({ presupuesto, gastos }) => {
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);
	const [porcentajeGastado, setPorcentajeGastado] = useState(0);

	useEffect(() => {
		const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
		const totalDisponible = presupuesto - totalGastado;

		const porcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
		setTimeout(() => {
			setPorcentajeGastado(porcentaje);
		}, 1000);

		setDisponible(totalDisponible);
		setGastado(totalGastado);
	}, [gastos]);

	const formatearCatidad = (cantidad) => {
		return cantidad.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<CircularProgressbar
					value={porcentajeGastado}
					styles={buildStyles({
						pathColor: '#3b82f6',
						textColor: '#3b82f6',
						trailColor: '#f5f5f5'
					})}
					text={`${porcentajeGastado}% gastado`}
				/>
			</div>
			<div className="contenido-presupuesto">
				<p>
					<span>Presupuesto: </span>
					{formatearCatidad(presupuesto)}
				</p>
				<p>
					<span>Disponible: </span>
					{formatearCatidad(disponible)}
				</p>
				<p>
					<span>Gastado: </span>
					{formatearCatidad(gastado)}
				</p>
			</div>
		</div>
	);
};
