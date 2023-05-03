import React, { useState } from 'react';
import Divider from '../assets/pattern-divider-desktop.svg'
import Dice from '../assets/icon-dice.svg'

const Card = () => {
    const [qoute, setQoute] = useState([]);

    async function getRandom(){
        try{
            // const res = await fetch('https://api.adviceslip.com/advice');
            const qoute = await res.json();
            setQoute(qoute);
            console.log(qoute);
        }catch(error){
            console.log(error);
        }
    }

    // function getRandom(){
    //     setQoute(prevQoute => prevQoute + 1)
    // };

    return (
        <div className='Card bg-darkGrayish max-w-lg mx-auto p-10 pb-16 rounded-xl relative'>
            <div className="card-body flex flex-col gap-10">
                {/* {
                    qoute.map((item) => (
                        <p className='text-neonGreen font-extrabold text-center tracking-widest uppercase text-xs'>Advice # {item.id}</p>
                    ))
                } */}
                
                <h1 className='font-extrabold text-center tracking-widest text-3xl text-white'>{qoute}</h1>
                <div className="divider">
                    <img src={Divider} alt="" />
                </div>
            </div>
            <div className="card-button text-center absolute inset-x-0 bottom-0 mb-[-30px] flex items-end">
                <button className='mx-auto bg-neonGreen p-4 rounded-full hover:drop-shadow-lg hover:ring-2 hover:ring-neonGreen hover:outline-none' onClick={async () => await getRandom()}>
                    <img src={Dice} alt="New" />
                </button>
            </div>
        </div>
    );
}

export default Card;
