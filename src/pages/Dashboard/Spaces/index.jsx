import { useRef, useState } from 'react';
import image from '../../../assets/plano.webp'
import ImageMapper from 'react-img-mapper'
import { coords } from '../coords';




export const Spaces = () => {
  const [areas] = useState(coords);
  const [parentWidth] = useState(900);

  const ref = useRef(null);
  return (
    <div>


      <div>
        <ImageMapper
          ref={ref}
          src={image}
          map={{ name: 'last', areas }}
          onClick={(selectedArea,) => {
            console.log(selectedArea);

          }}
          enTouchStart={(selectedArea) => console.log(selectedArea)}
          responsive
          parentWidth={parentWidth}
        />
      </div>
    </div>
  )
}
