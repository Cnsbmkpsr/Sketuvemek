import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';

import {DragAndDropScreenProps} from "./IScreenDragNDrop";

import Icon from "../../../utils/svgInstantiator";

const useGesture = createUseGesture([dragAction, pinchAction]);

const DragAnDropElement = ({ children }: DragAndDropScreenProps) => {

    React.useEffect(() => {
        const handler = e => e.preventDefault();
        document.addEventListener('gesturestart', handler)
        document.addEventListener('gesturechange', handler)
        document.addEventListener('gestureend', handler)
        return () => {
          document.removeEventListener('gesturestart', handler)
          document.removeEventListener('gesturechange', handler)
          document.removeEventListener('gestureend', handler)
        }
      }, []);

      const [style, api] = useSpring(() => ({
        x: 0,
        y: 0,
        scale: 1,
        rotateZ: 0,
      }))
      const ref = React.useRef<HTMLDivElement>(null);

      useGesture(
        {
          onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
            if (pinching) return cancel()
            api.start({ x, y })
          },
          onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s, a], memo }) => {
            if (first && ref.current !== null) {
              const { width, height, x, y } = ref.current.getBoundingClientRect()
              const tx = ox - (x + width / 2)
              const ty = oy - (y + height / 2)
              memo = [style.x.get(), style.y.get(), tx, ty]
            }

            const x = memo[0] - ms * memo[2]
            const y = memo[1] - ms * memo[3]
            api.start({ scale: s, rotateZ: a, x, y })
            return memo
          },
        },
        {
          target: ref,
          drag: { from: () => [style.x.get(), style.y.get()] },
          pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
        }
      )

    return(
    <animated.div className="border border-white" ref={ref} style={style}>
        {children}
        <div className="grid grid-cols-12">
            <Icon id={"icon-arrow-down"}/>
        </div>
    </animated.div>
    );
}

export default DragAnDropElement;
