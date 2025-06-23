import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import type { LottieComponentProps } from 'lottie-react';

interface Props {
  src: string;
  height?: number;
  width?: number;
}

const LottieAnimation = ({ src, height = 400, width = 400 }: Props) => {
  const [animationData, setAnimationData] = useState<LottieComponentProps['animationData'] | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation:', err));
  }, [src]);

  if (!animationData) {
    return <div style={{ color: 'white' }}>Loading animation...</div>;
  }

  return (
    <div style={{ width, height, margin: '0 auto' }}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default LottieAnimation;
