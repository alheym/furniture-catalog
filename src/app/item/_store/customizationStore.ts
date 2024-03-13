import { chairColors, cushionColors } from '@/constants/data'
import { create } from 'zustand'

type MaterialType = 'leather' | 'fabric'

type LegsType = 1 | 2

interface CustomizationState {
  material: MaterialType
  setMaterial: (value: MaterialType) => void
  legs: LegsType
  setLegs: (value: LegsType) => void
  mainColor: { color: string; name: string }
  setMainColor: (color: string, name: string) => void
  detailColor: { color: string; name: string }
  setDetailColor: (color: string, name: string) => void
}

export const useCustomization = create<CustomizationState>()((set, get) => ({
  material: 'leather',
  setMaterial(value: MaterialType) {
    set({ material: value })
  },
  legs: 2,
  setLegs(value: LegsType) {
    set({ legs: value })
  },
  mainColor: chairColors[0],
  setMainColor(color: string, name: string) {
    set({ mainColor: { color, name } })
  },
  detailColor: cushionColors[0],
  setDetailColor(color: string, name: string) {
    set({ detailColor: { color, name } })
  },
}))
