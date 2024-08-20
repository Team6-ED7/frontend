import { useRef, useState } from 'react';
import ImageMapper from 'react-img-mapper'
import { coordsFloorOne } from '../coords';

import urlImageFloorOne from '../../../assets/floorone.webp';


export const FloorOne = () => {
  const [areas] = useState(coordsFloorOne);
  const [parentWidth] = useState(900);

  const ref = useRef(null);
  return (
    <div className='   justify-center sm:flex  hidden '>
      <ImageMapper
        ref={ref}
        src={urlImageFloorOne}
        map={{ name: 'last', areas }}
        onClick={(selectedArea,) => {
          console.log(selectedArea);

        }}
        enTouchStart={(selectedArea) => console.log(selectedArea)}
        responsive
        parentWidth={parentWidth}
      />
    </div>
  )
}
