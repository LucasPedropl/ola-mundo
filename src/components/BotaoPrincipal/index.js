import style from './BotaoPrincipal.module.css';

export default function BotaoPrincipa({ children, tamanho }) {
	return (
		<button
			className={`
            ${style.botao}
            ${style[tamanho]}
            `}
		>
			{children}
		</button>
	);
}
