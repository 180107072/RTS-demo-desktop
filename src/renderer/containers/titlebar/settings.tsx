import clsx from 'clsx';
import Settings from '../../../../assets/icons/svg/settings.svg';
import css from './traffic_lights.module.css';

export function SettingsContextMenu() {
  return (
    <div
      className={clsx(
        css.window_controls_container,
        css.window_settings_context_menu_container
      )}
    >
      <div className={css.window_icon}>
        <Settings />
      </div>
    </div>
  );
}
