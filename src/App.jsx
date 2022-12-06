import React from "react"
import Navbar from './assets/Navbar'
import Hero from './assets/Hero'
import Card from './assets/Card'
import data from './assets/data'


export default function App() {
    let parsedata = data.map( item => {
        return <Card 
        key={item.id}
        {...item}   />
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
            {parsedata}
            </section>
        </div>
    )
}