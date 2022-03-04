import styles from './../../styles/Presos.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { presos: data },
  };
};
const Presos = ({ presos }) => {
  return (
    <div>
      <h1>All Presos</h1>
      {presos.map(preso => (
        <Link href={'/presos/' + preso.id} key={preso.id}>
          <a className={styles.linha}>
            <h3>{preso.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Presos;
