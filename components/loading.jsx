import { AiFillLinkedin } from 'react-icons/ai';
import styles from './loading.module.css';

function Loading() {
  return (
    <div class={styles.container}>
      <img
        src="http://app.femaledaily.com/wp-content/uploads/2018/07/FD-Logo-Pink.png"
        alt="female daily"
        className="max-w-full w-50 h-auto flex mx-auto"
      />
      {/* <AiFillLinkedin className="text-3xl text-center flex mx-auto" /> */}
      <div class={styles.line}>
        <div class={styles.inner}></div>
      </div>
    </div>
  );
}

export default Loading;
