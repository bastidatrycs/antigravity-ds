import { DesignSystem } from '@/lib/types'
import { linearSystem } from './systems/linear'

export const systems: DesignSystem[] = [linearSystem]

export function getSystem(id: string): DesignSystem | undefined {
  return systems.find((s) => s.id === id)
}
