import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import bg from './bg.png';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: `url(${bg}) no-repeat center center fixed`,
            backgroundSize: 'cover' , height: '91vh'}}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-20 items-right justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-right" style={{
                        width:'80vh',
                        marginTop: '6rem'
                    }}>
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                {/* <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" /> */}
                            </div>

                            {/* Text  */}
                            <h1 className=' text-white font-bold' style={{
                                fontSize: '6rem',
                                width: '100vh',
                                marginLeft: '-10rem'
                            }}>&#x1F343;The Groco 📝Blog ...</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-xl text-lg font-extralight sm:mx-auto ">
                            Exchange recipies, comments, opinions and knowledge &#x2B50;
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection