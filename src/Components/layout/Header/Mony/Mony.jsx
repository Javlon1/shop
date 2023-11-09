import * as React from 'react'
import { Context } from '../../../../Context/Context';
import { MonyS } from '../../../../Data/Data';
import './Mony.scss'


export default function Mony() {

    const { mony, setMony } = React.useContext(Context)

    const handleChange = (e) => {
        setMony(e.target.value)
    };

    React.useEffect(() => {
        window.localStorage.setItem('mony', mony)
    }, [mony])

    return (
        <section className='mony'>
            <select className='select' defaultValue={mony} onChange={handleChange} name="" id="">
                {
                    MonyS?.map((e) => (
                        <option key={e.id} value={e.mony}>{e.mony}</option>
                    ))
                }
            </select>
        </section>
    )
}
