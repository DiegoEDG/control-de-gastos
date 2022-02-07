import React from 'react';
import { ControlPresupuesto } from './ControlPresupuesto';
import { PresupuestoForm } from './PresupuestoForm';

export const Header = ({
	presupuesto,
	setPresupuesto,
	isValidPresupuesto,
	setIsValidPresupuesto,
	gastos,
	setGastos
}) => {
	return (
		<header>
			<h1>Control de Gastos</h1>
			{isValidPresupuesto ? (
				<ControlPresupuesto
					presupuesto={presupuesto}
					gastos={gastos}
					setPresupuesto={setPresupuesto}
					setIsValidPresupuesto={setIsValidPresupuesto}
					setGastos={setGastos}
				/>
			) : (
				<PresupuestoForm
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setIsValidPresupuesto={setIsValidPresupuesto}
				/>
			)}
		</header>
	);
};
