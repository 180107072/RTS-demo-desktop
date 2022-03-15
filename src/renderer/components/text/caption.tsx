import css from './text.module.css';

type CaptionProps = {
  children: string | React.FC;
};

export function Caption({ children }: CaptionProps) {
  return <p className={css.caption}>{children}</p>;
}
