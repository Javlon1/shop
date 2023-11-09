import * as React from 'react'
import './Newsletter.scss'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className='container'>
                <form className='container__form'>
                    <h2 className='container__form__title'>
                        Subscribe Newsletter
                    </h2>
                    <input
                        className='container__form__inp'
                        type="email"
                        placeholder="Enter Your Email"
                        name="EMAIL"
                        required
                    />
                    <button
                        className='container__form__btn'
                        type="submit">
                        Subscribe
                    </button>
                </form>
                {/* <Image
                        src={newslatter}
                        alt="Shape"
                        width={260}
                        height={205}
                    /> */}
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Newsletter;