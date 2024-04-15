'use client'
import { Marker } from '../../../src/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Marker color='green' size={100} borderSize={10} borderColor='white' isBorder/>
    </main>
  );
}
