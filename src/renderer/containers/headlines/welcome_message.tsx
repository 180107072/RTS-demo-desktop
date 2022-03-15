import css from './headlines.module.css';
import { Caption } from '../../components/text/caption';

export function WelcomeMessage() {
  return (
    <div className={css.welcome_msg_container}>
      <h2 style={{ whiteSpace: 'nowrap', textTransform: 'capitalize' }}>
        RTS demo project
      </h2>
      <Caption>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu
        elit, vestibulum sit amet tincidunt et, varius non sapien. Nullam
        faucibus consectetur scelerisque. Nulla dapibus luctus lectus, a laoreet
        libero vehicula vitae. Maecenas in luctus elit, id porttitor nunc.
        Quisque vitae eleifend neque, nec vulputate lectus. Phasellus orci mi,
        dictum eget metus ac, dignissim efficitur dui. Aenean in nulla vitae
        diam hendrerit blandit vitae iaculis dolor. Donec euismod nisl a velit
        porta tincidunt. Vestibulum quis cursus odio, et eleifend dui. Quisque
        sit amet ligula dolor. Ut malesuada libero sit amet ligula sodales
        facilisis. Phasellus quis metus eleifend, suscipit lectus at, feugiat
        quam.
      </Caption>
    </div>
  );
}
