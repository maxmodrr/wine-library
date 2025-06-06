/// <reference types="vite/client" />

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<React.SVGSVGElement>>;
  export default ReactComponent;
}
