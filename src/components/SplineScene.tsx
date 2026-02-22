import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SplineScene({ scene, className, style }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-sm font-medium animate-pulse">Loading 3D Scene...</span>
        </div>
      }
    >
      <Spline scene={scene} className={className} style={style} />
    </Suspense>
  );
}
