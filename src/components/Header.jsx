import React from 'react';
import { PresupuestoForm } from './PresupuestoForm';

export const Header = ({ presupuesto, setPresupuesto }) => {
	return (
		<header>
			<h1>Planificador de Gastos</h1>
			<PresupuestoForm presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
		</header>
	);
};
