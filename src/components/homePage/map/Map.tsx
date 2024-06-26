import { ReactNode, useEffect, useRef, useState } from 'react';
import { KakaoMapContext } from './useMap';
import Error from '@/components/atoms/Error';

interface MapProps {
  children: ReactNode;
}

//TODO: 지도 이동 기능 추가
export default function Map(props: MapProps) {
  const [map, setMap] = useState<kakao.maps.Map | null>();
  const kakaoMapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 예외처리
    if (!kakaoMapRef.current) {
      return;
    }

    const targetPoint = new kakao.maps.LatLng(37.555573, 126.924748);
    const options = {
      center: targetPoint,
      level: 3,
    };

    setMap(new window.kakao.maps.Map(kakaoMapRef.current, options));
  }, []);

  return (
    <div className="relative mx-auto w-full h-3/4">
      <div className="static w-full h-full" ref={kakaoMapRef} />
      {map ? <KakaoMapContext.Provider value={map}>{props.children}</KakaoMapContext.Provider> : <Error />}
    </div>
  );
}
