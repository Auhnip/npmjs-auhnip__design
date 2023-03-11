import * as React from 'react';
import { type allowHideComponent, type normalComponent } from './layoutComponentCreator';
interface IProps {
    children: React.ReactNode;
}
declare const ClassicLayout: {
    ({ children }: IProps): JSX.Element;
    Header: normalComponent;
    LeftSidebar: allowHideComponent;
    Content: normalComponent;
    RightSidebar: allowHideComponent;
    Footer: normalComponent;
};
export default ClassicLayout;
//# sourceMappingURL=ClassicLayout.d.ts.map