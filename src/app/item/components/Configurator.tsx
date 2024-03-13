import { chairColors, cushionColors } from '@/constants/data'
import { Poppins } from 'next/font/google'
import { FC } from 'react'
import { useCustomization } from '../_store/customizationStore'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const Configurator: FC = () => {
  const [material, setMaterial] = useCustomization((state) => [
    state.material,
    state.setMaterial,
  ])
  const [legs, setLegs] = useCustomization((state) => [
    state.legs,
    state.setLegs,
  ])

  const [mainColor, setMainColor] = useCustomization((state) => [
    state.mainColor,
    state.setMainColor,
  ])

  const [detailColor, setDetailColor] = useCustomization((state) => [
    state.detailColor,
    state.setDetailColor,
  ])

  return (
    <div
      className={` ${poppins.className} uppercase flex flex-col gap-8 fixed right-6 w-[320px] bottom-[25vh] text-white p-4`}
    >
      <div className='flex flex-col gap-5'>
        <h2>Material</h2>
        <div className=' flex gap-4 font-bold text-xs text-[#acacac] '>
          <div
            className={`${
              material === 'leather' && 'text-white'
            } cursor-pointer hover:opacity-80 transition-all duration-[400ms]`}
            onClick={() => setMaterial('leather')}
          >
            Leather
          </div>
          <div
            className={` ${
              material === 'fabric' && 'text-white'
            }  cursor-pointer hover:opacity-80 transition-all duration-[400ms]`}
            onClick={() => setMaterial('fabric')}
          >
            Fabric
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h2>Main color</h2>
        <div className=' flex font-bold flex-wrap gap-8 text-xs text-[#acacac] '>
          {chairColors.map((item) => (
            <div
              key={item.color}
              className={`flex items-center flex-col gap-2`}
            >
              <div
                style={{
                  background: item.color,
                }}
                className={`h-8 w-8 rounded-full border-2 cursor-pointer hover:opacity-80 ${
                  item.color === mainColor.color
                    ? ' border-white'
                    : 'border-[#999]'
                }`}
                onClick={() => setMainColor(item.color, item.name)}
              ></div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h2>Details color</h2>
        <div className=' flex font-bold flex-wrap gap-8 text-xs text-[#acacac] '>
          {cushionColors.map((item) => (
            <div key={item.color} className='flex items-center flex-col gap-2'>
              <div
                style={{
                  background: item.color,
                }}
                className={`h-8 w-8 rounded-full border-2 cursor-pointer hover:opacity-80 ${
                  item.color === detailColor.color
                    ? ' border-white'
                    : 'border-[#999]'
                }`}
                onClick={() => setDetailColor(item.color, item.name)}
              ></div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h2>Legs</h2>
        <div className=' flex gap-4 font-bold text-xs text-[#acacac] '>
          <div
            className={`${
              legs === 1 && 'text-white'
            } cursor-pointer hover:opacity-80 transition-all duration-[400ms]`}
            onClick={() => setLegs(1)}
          >
            Design
          </div>
          <div
            className={` ${
              legs === 2 && 'text-white'
            }  cursor-pointer hover:opacity-80 transition-all duration-[400ms]`}
            onClick={() => setLegs(2)}
          >
            Classic
          </div>
        </div>
      </div>
    </div>
  )
}
