import { DesignSystem } from '@/lib/types'
import { linearSystem } from './systems/linear'
import { fchHansaRostockSystem } from './systems/fch-hansa-rostock'

export const systems: DesignSystem[] = [linearSystem, fchHansaRostockSystem]

export function getSystem(id: string): DesignSystem | undefined {
  return systems.find((s) => s.id === id)
}
