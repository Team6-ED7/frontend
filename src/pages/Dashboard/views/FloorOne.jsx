import { useEffect, useRef, useState } from 'react';
import ImageMapper from 'react-img-mapper'
import { coordsFloorOne } from '../coords';

import urlImageFloorOne from '../../../assets/floorone.webp';
import floorOneMobile from '../../../assets/floorOneMobile.webp';
import { Button, useDisclosure } from '@nextui-org/react';
import ModalSelectSpace from './Modals/ModalSelectSpace';
import { DatePicker } from "@nextui-org/react";
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
  useEffect(() => {
    axios.get(apis.spaces.spacesByFloor + '1').then(({ data }) => {
      setDataFloor(data)

    }).catch(err => {
      console.log(err)
    }).finally(() => {
    })

  }, [])


  const merge = (dataGet) => {
    const dataAvaliableFloor = dataGet.map((area) => {
      const f = coordsFloorOne.map(data => {
        if (data.id === area.name) {
          return {
            ...data,
            "disabled": area.available ? false : true,
            "preFillColor": area.available ? coordsColors.avaliable : coordsColors.notAvaliable,
          }
        } else return null


      }).filter(data => data !== null)

      return f
    }).flat()
    return dataAvaliableFloor

  }

  useEffect(() => {
    if (dataFloor?.length > 0) {
      const up = merge(dataFloor)
      setAreas(up)
      setLoading(false)
    }

  }, [dataFloor])


  return (
    <div className=' flex  justify-center '>
      {
        loading ? <div>Cargando</div> :
          <>
            <div className='sm:flex  hidden  flex-col  gap-2 justify-center '>
              <div className='pt-4 flex  items-end gap-1 self-end'>
                <DatePicker
                  minValue={today(getLocalTimeZone())}
                  label="Seleccione una fecha" value={date} onChange={setDate}
                  variant='faded'
                  isRequired
                  labelPlacement='outside'
                  color="default"
                  className="max-w-[284px]"
                />
                <Button color='primary' size='md'>
                  Consultar
                </Button>
              </div>
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
          </>
      }
      {isOpen && <ModalSelectSpace isOpen={isOpen} onOpenChange={onOpenChange} onOpen={onOpen} areaSelected={areaSelected} />}
    </div>
  )
}
