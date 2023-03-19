import * as React from 'react';
interface IProps {
    hidden: boolean;
    height?: number;
    width?: number;
    children?: React.ReactNode;
}
type allowHideComponent = ({ hidden, children }: IProps) => JSX.Element;
type normalComponent = ({ children }: Omit<IProps, 'hidden'>) => JSX.Element;
declare function layoutComponentCreator(tag: 'header' | 'aside' | 'section' | 'footer', classNameSuffix: 'header' | 'left-sidebar' | 'right-sidebar' | 'content' | 'footer', hiddenClassNameSuffix?: 'left' | 'right'): normalComponent | allowHideComponent;
export type { normalComponent, allowHideComponent };
export default layoutComponentCreator;
//# sourceMappingURL=layoutComponentCreator.d.ts.map