import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlPresupuesto = ({ presupuesto, gastos, setGastos, setPresupuesto, setIsValidPresupuesto }) => {
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);
	const [porcentajeGastado, setPorcentajeGastado] = useState(10);

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

	const handleResetApp = () => {
		const resetear = confirm('¿Estás seguro que quieres resetear la app?');
		if (resetear) {
			setGastos([]);
			setPresupuesto(0);
			setIsValidPresupuesto(false);
		}
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<CircularProgressbar
					value={porcentajeGastado}
					styles={buildStyles({
						pathColor: porcentajeGastado > 100 ? '#DC2626' : '#3b82f6',
						textColor: porcentajeGastado > 100 ? '#DC2626' : '#3b82f6',
						trailColor: '#F5F5F5'
					})}
					text={`${porcentajeGastado}% gastado`}
				/>
			</div>
			<div className="contenido-presupuesto">
				<button className="reset-app" type="button" onClick={handleResetApp}>
					Resetear App
				</button>
				<p>
					<span>Presupuesto: </span>
					{formatearCatidad(presupuesto)}
				</p>
				<p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
