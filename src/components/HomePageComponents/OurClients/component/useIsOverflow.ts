import * as React from 'react';

export const useIsOverflow = (ref: any, callback: any) => {
  const [isOverflow, setIsOverflow] = React.useState("" as any);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow: any = current.scrollWidth > current.clientWidth;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};