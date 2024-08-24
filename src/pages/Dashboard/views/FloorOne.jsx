import { useEffect, useRef, useState } from 'react';
import ImageMapper from 'react-img-mapper'
import { coordsFloorOne } from '../coords';

import urlImageFloorOne from '../../../assets/floorone.webp';
import floorOneMobile from '../../../assets/floorOneMobile.webp';
import { useDisclosure } from '@nextui-org/react';
import ModalSelectSpace from './Modals/ModalSelectSpace';
import { getLocalTimeZone, today } from "@internationalized/date";
import axios from 'axios';
import { apis } from '../../../api/apis';
import { coordsColors } from '../constants';
import { Image } from "@nextui-org/image";
export const FloorOne = () => {
  const [loading, setLoading] = useState(true);
  const [areas, setAreas] = useState(coordsFloorOne);
  const [parentWidth] = useState(700);
  const [areaSelected, setAreaSelected] = useState(null);
  const ref = useRef(null);
  const [date, setDate] = useState(today(getLocalTimeZone()));
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [dataFloor, setDataFloor] = useState([])
  const [error, setError] = useState(false)
  const [getReservations, setGetReservations] = useState(false)
  useEffect(() => {
    axios.get(apis.spaces.spacesByFloor + '1').then(({ data }) => {
      setDataFloor(data)

    }).catch(err => {
      console.log(err)
      setError(true)
    })

  }, [getReservations])


  const merge = (dataGet) => {
    const dataAvaliableFloor = dataGet.map((area) => {
      const filter = coordsFloorOne.map(data => {
        if (data.id === area.name) {
          return {
            ...data,
            "disabled": area.available ? false : true,
            "preFillColor": area.available ? coordsColors.avaliable : coordsColors.notAvaliable,
            "typeSpace": area.typeSpace
          }
        } else return null


      }).filter(data => data !== null)

      return filter
    }).flat()
    return dataAvaliableFloor

  }

  useEffect(() => {
    if (dataFloor?.length > 0) {
      const update = merge(dataFloor)
      setAreas(update)
      setLoading(false)
    }

  }, [dataFloor])


  return (
    <div className=' flex  justify-center '>
      {error ? <div className='text-red-500 p-4'> <h1>Error al cargar la informacion</h1></div> :
        loading ? <div>Cargando</div> :
          <div className=''>
            <div className='sm:flex  hidden  flex-col  gap-2 justify-center '>

              <div className='p-1 border border-gray-400/35 rounded-sm border-solid'>
                <ImageMapper

                  ref={ref}
                  src={urlImageFloorOne}
                  map={{ name: 'Floor One', areas }}
                  onClick={(selectedArea) => {
                    setAreaSelected(selectedArea)
                    onOpenChange(true)
                  }}
                  enTouchStart={(selectedArea) => console.log(selectedArea)}
                  responsive
                  parentWidth={parentWidth}
                />
              </div>
            </div>
            <div className='sm:hidden flex '>
              <Image
                isBlurred
                width={240}
                src={floorOneMobile}
                alt="NextUI Album Cover"
                className="m-5"
              />
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
      }
      {isOpen && <ModalSelectSpace isOpen={isOpen} onOpenChange={onOpenChange} onOpen={onOpen} areaSelected={areaSelected} date={date} setGetReservations={setGetReservations} />}
    </div>
  )
}
