import { AiFillLinkedin } from 'react-icons/ai';
import styles from './loading.module.css';

function Loading() {
  return (
    <div className={styles.container}>
      <img
        src="http://app.femaledaily.com/wp-content/uploads/2018/07/FD-Logo-Pink.png"
        alt="female daily"
        className="max-w-full w-50 h-auto flex mx-auto"
      />
      <div className={styles.line}>
        <div className={styles.inner}></div>
      </div>
    </div>
  );
}

export default Loading;
