import { Link } from "react-router-dom";
import React from 'react'
import { ReactComponent as ApostIcon } from '../assets/img/apostrophe.svg'
import { ReactComponent as Pattern1 } from '../assets/img/bg-pattern-home-1.svg'
import { ReactComponent as Pattern2 } from '../assets/img/bg-pattern-home-2.svg'
import { ReactComponent as Pattern4 } from '../assets/img/bg-pattern-home-4-about-3.svg'
import { ReactComponent as Pattern3 } from '../assets/img/bg-pattern-home-3.svg'
import { ReactComponent as Pattern5 } from '../assets/img/bg-pattern-home-5.svg'
import { ReactComponent as Pattern6 } from '../assets/img/bg-pattern-home-6-about-5.svg'
import { ReactComponent as IconChart } from '../assets/img/icon-chart.svg'
import { ReactComponent as IconCog } from '../assets/img/icon-cog.svg'
import { ReactComponent as IconPerson } from '../assets/img/icon-person.svg'
import avatarKady from '../assets/img/avatar/avatar-kady.jpg'
import avatarAiysha from '../assets/img/avatar/avatar-aiysha.jpg'
import avatarArthur from '../assets/img/avatar/avatar-arthur.jpg'
export function Home() {

  return <main className="home">

    <section className="relative">
      <Pattern1 />
      <div className=" hero main-container flex space-between">
        <h1>Find the Best <span> Talent</span></h1>
        <div className="hero-content relative flex column ">
          <hr />
          <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
          <Pattern2 />
        </div>
      </div>
    </section>
    <section className=" features relative">
      <div className="main-container">
        <hr />
        <div className="flex features-content space-between">
          <h2>Build and manage distributed teams like no one else</h2>
          <div className="feature-list container relative">
            <div className="feature-list-preview flex">
              <IconPerson />
              <div>
                <h4> Experienced Individuals</h4>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>

            </div>
            <div className="feature-list-preview flex">
              <IconCog />
              <div>
                <h4> Easy to Implement</h4>
                <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
              </div>
            </div>
            <div className="feature-list-preview flex">
              <IconChart />
              <div>
                <h4> Enhanced Productivity</h4>
                <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
              </div>
            </div>
          </div>
        </div>
        <Pattern3 />
      </div>
    </section>
    <section className="testimonials relative">
      <Pattern4 />
      <div className="main-container">
        <h2>Delivering real results for top companies. Some of our <span> success stories.</span></h2>
        <div className="testimonials-container flex">
          <article className="testimonial relative flex column align-center">
            <ApostIcon />
            <p className="relative">
              “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
            <h5>kady Baker</h5>
            <i>product manager at bookmark</i>
            <img src={avatarKady} alt="" />
          </article>
          <article className="testimonial relative flex column align-center">
            <ApostIcon />
            <p className="relative">
              “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
            <h5>kady Baker</h5>
            <i>product manager at bookmark</i>
            <img src={avatarAiysha} alt="" />
          </article>
          <article className="testimonial relative flex column align-center">
            <ApostIcon />
            <p className="relative">
              “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
            <h5>kady Baker</h5>
            <i>product manager at bookmark</i>
            <img src={avatarArthur} alt="" />
          </article>
        </div>
      </div>
      <Pattern5 />

    </section>
    <section className="contact relative">
      <div className="main-container contact-container flex ">
        <h3>Ready to get started? </h3>
        <Link className="round-btn">contact us </Link>
      </div>
      <Pattern6/>
    </section>
  </main>

}