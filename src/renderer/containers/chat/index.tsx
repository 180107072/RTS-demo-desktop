import css from './chat.module.css';
import { MessageComposer } from './composer';
import { MessagesContainer } from './messages';
import Hide from '../../../../assets/icons/svg/arrow.svg';

export function Chat() {
  return (
    <div className={css.chat_window}>
      <MessagesContainer />
      <MessageComposer />
    </div>
  );
}
