import css from './ActionCenterTile.module.scss';

interface IActionCenterTileProps {
  grid: [rowStart: number, rowSpan: number];
  children: any;
}

export const ActionCenterTile = ({
  grid,
  children,
}: IActionCenterTileProps) => {
  const [rowStart, rowsPan] = grid;

  return (
    <div
      className={css.container}
      style={
        {
          '--row-start': rowStart,
          '--row-span': rowsPan,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
