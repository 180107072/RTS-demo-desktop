import css from './chat.module.css';
import SendMessage from '../../../../assets/icons/svg/send_message.svg';

export function MessageComposer() {
  return (
    <div className={css.composer_container}>
      <input type="text" className={css.composer_input} />
      <div className={css.composer_send_button}>
        <SendMessage />
      </div>
    </div>
  );
}
