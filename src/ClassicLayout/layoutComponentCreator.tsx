import * as React from 'react';
import layoutStyle from './ClassicLayout.css';

interface IProps {
  hidden: boolean;
  children?: React.ReactNode;
}

type allowHideComponent = ({ hidden, children }: IProps) => JSX.Element;
type normalComponent = ({ children }: Omit<IProps, 'hidden'>) => JSX.Element;

function layoutComponentCreator(
  tag: 'header' | 'aside' | 'section' | 'footer',
  classNameSuffix:
    | 'header'
    | 'left-sidebar'
    | 'right-sidebar'
    | 'content'
    | 'footer',
  hiddenClassNameSuffix?: 'left' | 'right'
): normalComponent | allowHideComponent {
  if (hiddenClassNameSuffix) {
    return ({ hidden, children }: IProps) => {
      const ComponentName = tag;

      let className = layoutStyle[`classic-layout-${classNameSuffix}`];
      if (hidden) {
        className += ` ${
          layoutStyle[`classic-layout-hidden-${hiddenClassNameSuffix}`]
        }`;
      }

      return <ComponentName className={className}>{children}</ComponentName>;
    };
  }

  return ({ children }: Omit<IProps, 'hidden'>) => {
    const ComponentName = tag;

    return (
      <ComponentName className={layoutStyle[`classic-layout-${classNameSuffix}`]}>
        {children}
      </ComponentName>
    );
  };
}

export type { normalComponent, allowHideComponent };

export default layoutComponentCreator;
