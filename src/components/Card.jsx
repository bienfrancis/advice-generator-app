import React, { useEffect, useState } from 'react';
import Divider from '../assets/pattern-divider-desktop.svg'
import Dice from '../assets/icon-dice.svg'

const Card = () => {
    const [qoute, setQoute] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

   useEffect(() => {
    fetchData();
   }, []);

    const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await fetch('https://api.adviceslip.com/advice');
            const json = await response.json();
            setQoute(json);
            setIsLoading(false);
        }catch(error){
            setError(error);
        }
        setIsLoading(false);
    }

    function getRandom(){
        fetchData();
    };

    if(isLoading){
        return(
            <p>Loading ...</p>
        )
    }

    if(error){
        return (
            <p>Error: {error.message}</p>
        )
    }

    if(qoute) {
        return (
            <div className='Card bg-darkGrayish max-w-lg mx-auto p-10 pb-16 rounded-xl relative'>
                <div className="card-body flex flex-col gap-10">
                    <p className='text-neonGreen font-extrabold text-center tracking-widest uppercase text-xs'>Advice # {qoute.slip.id}</p>
                    <h1 className='font-extrabold text-center tracking-wide text-3xl text-white'>"{qoute.slip.advice}"</h1>
                    <div className="divider">
                        <img src={Divider} alt="" />
                    </div>
                </div>
                <div className="card-button text-center absolute inset-x-0 bottom-0 mb-[-30px] flex items-end">
                    <button className='mx-auto bg-neonGreen p-4 rounded-full hover:drop-shadow-lg hover:ring-2 hover:ring-neonGreen hover:outline-none' onClick={getRandom}>
                        <img src={Dice} alt="New" />
                    </button>
                </div>
            </div>
        )
    }

}

export default Card;
