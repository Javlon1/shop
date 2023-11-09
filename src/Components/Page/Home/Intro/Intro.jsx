import * as React from 'react'
import { useState } from 'react'
import { Context } from '../../../../Context/Context'
import { sliderData } from '../../../../Data/Data'
import './Intro.scss'

export default function Intro() {
    const { lan } = React.useContext(Context)
    const [slider, setSlider] = useState(sliderData)

    const [index, setIndex] = useState(0)

    const lastIndex = slider.length - 1

    const btnPrev = () => {
        setIndex(index => {
            if (index > 0) {
                return index - 1
            }
            return setIndex(lastIndex)
        })
    }

    const btnNext = () => {
        setIndex(index => {
            if (index < slider.length - 1) {
                return index + 1
            }
            return setIndex(0)
        })
    }


    return (
        <section className='intro'>
            <div className='container'>
                <div onClick={btnPrev} className='container__left'>
                    <i className="bi bi-arrow-left-short"></i>
                </div>
                {
                    slider?.map((e, i) => (
                        <div key={e.id} className={i === index ? "container__a slider-act" : "container__a"}>
                            <div className="container__a__content" >
                                <h2 className="container__a__content__stitle">{e[`stitle_${lan}`]}</h2>
                                <h1 className="container__a__content__title">{e[`title_${lan}`]}</h1>
                                <p>{e[`text_${lan}`]}</p>
                                <span className="container__a__content__disc">Starting @<span>${e.price}</span></span>
                                <a href="#" className="container__a__content__btn">{e[`btn_${lan}`]}</a>
                            </div>
                            <div className='container__a__img'>
                                <img src={e.img} alt="" />
                            </div>
                        </div>
                    ))
                }
                <div onClick={btnNext} className='container__right'>
                    <i className="bi bi-arrow-right-short"></i>
                </div>
            </div>
        </section>
    )
}