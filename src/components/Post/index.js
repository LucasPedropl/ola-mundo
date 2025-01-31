import { Routes, useParams, Route } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'components/postModelo';
import ReactMarkdown from 'react-markdown';
import './Post.css'
import NaoEncontrado from 'components/NaoEconrada';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Post() {
	const parametros = useParams();
	const post = posts.find((post) => {
		return post.id === Number(parametros.id);
	});

    if(!post){
        return <NaoEncontrado/>;
    }

	return (
		<Routes>
			<Route path="*" element={<PaginaPadrao />}>
				<Route
					index
					element={
						<PostModelo FotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
							<div className="post-markdown-container">
								<ReactMarkdown>{post.texto}</ReactMarkdown>
							</div>
						</PostModelo>
					}
				></Route>
			</Route>
		</Routes>
	);
}
