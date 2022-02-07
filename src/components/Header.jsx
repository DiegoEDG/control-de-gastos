import React from 'react';
import { ControlPresupuesto } from './ControlPresupuesto';
import { PresupuestoForm } from './PresupuestoForm';

export const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos }) => {
	return (
		<header>
			<h1>Planificador de Gastos</h1>
			{isValidPresupuesto ? (
				<ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
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
