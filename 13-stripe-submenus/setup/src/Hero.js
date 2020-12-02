import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  // const { closeSubMenu } = useGlobalContext()
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online. Start now phone
          </p>
          <button className='btn'></button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone-img' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
