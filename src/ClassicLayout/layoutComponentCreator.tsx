import * as React from 'react';
import layoutStyle from './ClassicLayout.css';

interface IProps {
  hidden: boolean;
  height?: number;
  width?: number;
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
  const HiddenComponent = ({ hidden, height, width, children }: IProps) => {
    const ComponentName = tag;

    let className = layoutStyle[`classic-layout-${classNameSuffix}`];
    if (hidden) {
      className += ` ${
        layoutStyle[`classic-layout-hidden-${hiddenClassNameSuffix}`]
      }`;
    }

    const styleObject: React.CSSProperties = {}

    height && (styleObject.height = `${height}px`)
    width && (styleObject.width = `${width}px`)

    return (
      <ComponentName
        className={className}
        style={styleObject}
      >
        {children}
      </ComponentName>
    );
  };

  if (hiddenClassNameSuffix) {
    return HiddenComponent;
  }

  return (props: Omit<IProps, 'hidden'>) => {
    return <HiddenComponent hidden={false} {...props} />;
  };
}

export type { normalComponent, allowHideComponent };

export default layoutComponentCreator;
