import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.Apresentacao}>
				<h1 className={styles.titulo}>Olá, Mundo!</h1>
				<p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Pedro Mota, futuro engenheiro de Software. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
			</div>
			<div className={styles.imagens}>
				<img className={styles.circuloColorido} src={circuloColorido} alt="" aria-hidden={true} />

				<img src={minhaFoto} alt="foto do Pedro" className={styles.minhaFoto} 
                />
                
			</div>
		</div>
	);
}
