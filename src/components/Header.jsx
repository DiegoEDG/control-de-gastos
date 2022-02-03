import React from 'react';
import { ControlPresupuesto } from './ControlPresupuesto';
import { PresupuestoForm } from './PresupuestoForm';

export const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
	return (
		<header>
			<h1>Planificador de Gastos</h1>
			{isValidPresupuesto ? (
				<ControlPresupuesto presupuesto={presupuesto} />
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
