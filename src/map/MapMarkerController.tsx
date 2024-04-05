import { useEffect } from 'react';
import { PlaceType } from '../lib/types';
import MapMarker from './MapMarker';
import { useMap } from './useMap';

interface MapMarkerControllerProps {
  places: PlaceType[];
  selectedId?: string;
}

export default function MapMarkerController(props: MapMarkerControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (props.places.length < 1) {
      return;
    }

    const bounds = new window.kakao.maps.LatLngBounds();

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    props.places.forEach(place => {
      bounds.extend(place.position);
    });

    map.setBounds(bounds);
  }, [props.places]);

  return (
    <>
      {props.places.map(place => {
        return <MapMarker key={place.id} place={place} showInfo={props.selectedId === place.id} />;
      })}
    </>
  );
}
