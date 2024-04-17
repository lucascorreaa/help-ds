'use client'
import { Header } from '../../../src/components'

function test() {
  return console.log('oi')
}

const buttonArray = [
  {title: 'oi', onclick: test()},
  {title: 'oi', onclick: test()},
  {title: 'oi', onclick: test()}
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header title='header title' actions={buttonArray} />
    </main>
  );
}
