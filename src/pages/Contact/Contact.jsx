import styles from './Contact.module.css';

export default function Contact() {
	return (
		<section>
			<h1 className={styles.h1}>Contact Me</h1>
			<form className={styles.contact}>
				<input type="text" name="name" placeholder="Name" required />
				<input type="email" name="Email" placeholder="Email" required />
				<textarea type="" name="password" placeholder="Message" required />
				<button type="submit">Contact Me</button>
			</form>
		</section>
	);
}
