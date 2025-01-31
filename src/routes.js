import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SobreMim from './pages/Sobre Mim';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';
import PaginaPadrao from './components/PaginaPadrao';
import Post from 'components/Post';
import NaoEncontrado from 'components/NaoEconrada';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<PaginaPadrao />}>
					<Route index element={<Inicio />} />
					<Route path="sobreMim" element={<SobreMim />} />
				</Route>
				<Route path="posts/:id/*" element={<Post />} />
				<Route path="*" element={<NaoEncontrado />} />
			</Routes>
			<Rodape />
		</BrowserRouter>
	);
}

export default AppRoutes;
