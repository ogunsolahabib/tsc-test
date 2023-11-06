import Image from 'next/image'
import Container from './components/shared/Container'
import Button from './components/shared/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Container className='px-0'>
        <div className='w-full h-[320px] relative'>

          <Image src='/tsc-cotm.png' fill className='object-cover' alt='Man checking board' />
        </div>
        <div className="p-5">

          <div className='text-center space-y-3'>
            <h1 className="text-3xl font-semibold">CUBE OF THE MONTH NOMINATIONS</h1>
            <p>At cube we’re passionate about recognising the great work that our cubes do. Each month one of our cubes are crowned cube of the month 👑⭐. Please nominate who you think deserves this months title.</p>

          </div>
          <a href="" className='block mt-8 mx-auto w-fit'>
            <Button variant='primary' className='uppercase'>get started</Button>
          </a>
        </div>

      </Container>
    </main>
  )
}
