import PostModelo from 'components/postModelo';
import FotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/minha_foto.png';

export default function SobreMim() {
	return (
		<PostModelo FotoCapa={FotoCapa} titulo="Sobre mim">
			<h3 className={styles.subtitulo}>Olá, eu sou o Pedro!</h3>
			<img src={fotoSobreMim} alt="Foto do Pedro" className={styles.fotoSobreMim} />
			<p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, excepturi consequatur error nihil doloremque nobis repellendus nemo, non in dolorem architecto quas eveniet odit ea molestiae magni ut nostrum.</p>
			<p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, excepturi consequatur error nihil doloremque nobis repellendus nemo, non in dolorem architecto quas eveniet odit ea molestiae magni ut nostrum.</p>
			<p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, excepturi consequatur error nihil doloremque nobis repellendus nemo, non in dolorem architecto quas eveniet odit ea molestiae magni ut nostrum.</p>
			<p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, excepturi consequatur error nihil doloremque nobis repellendus nemo, non in dolorem architecto quas eveniet odit ea molestiae magni ut nostrum.</p>
			<p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, excepturi consequatur error nihil doloremque nobis repellendus nemo, non in dolorem architecto quas eveniet odit ea molestiae magni ut nostrum.</p>
			<p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, excepturi consequatur error nihil doloremque nobis repellendus nemo, non in dolorem architecto quas eveniet odit ea molestiae magni ut nostrum.</p>
			<p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, excepturi consequatur error nihil doloremque nobis repellendus nemo, non in dolorem architecto quas eveniet odit ea molestiae magni ut nostrum.</p>
			<p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, excepturi consequatur error nihil doloremque nobis repellendus nemo, non in dolorem architecto quas eveniet odit ea molestiae magni ut nostrum.</p>
		</PostModelo>
	);
}
