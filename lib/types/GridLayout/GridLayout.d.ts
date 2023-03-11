import React from 'react';
interface Distance {
    start: number;
    end: number;
}
type Positions = {
    row: Distance;
    col: Distance;
}[];
interface Props {
    positions: Positions;
    children: React.ReactNode;
}
interface State {
    rows: number;
    columns: number;
}
interface Helper {
    [layoutName: string]: Positions;
}
declare const GridLayoutHelper: Helper;
declare class GridLayout extends React.Component<Props, State> {
    static defaultProps: {
        positions: Positions;
    };
    constructor(props: Props);
    getRowsAndColumns(positions: Positions): {
        rows: number;
        columns: number;
    };
    transformAxis({ row, col }: {
        row: Distance;
        col: Distance;
    }): {
        row: {
            start: number;
            end: number;
        };
        col: {
            start: number;
            end: number;
        };
    };
    getGridItems(): JSX.Element[] | null | undefined;
    render(): JSX.Element;
}
export { GridLayoutHelper };
export default GridLayout;
//# sourceMappingURL=GridLayout.d.ts.map