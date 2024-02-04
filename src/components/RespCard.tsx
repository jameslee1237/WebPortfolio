import React, { useState } from 'react';
import { motion } from 'framer-motion';


const RespCard = ({ 
    Resp,
}: {
    Resp: {
        description: string;
        src: string;
    }
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div 
         onClick={handleFlip}
         className="mb-8 w-[800px] h-[150px]  rounded-md cursor-pointer">
            <motion.div 
             className="flip-card-inner w-full h-full"
             initial={false}
             animate={{rotateY: isFlipped ? 180 : 360}}
             transition={{ duration: 0.4, animationDirection: 'normal'}}
             onAnimationComplete={() => setIsAnimating(false)}
            >
                <div
                 className="w-full h-full group absolute bg-[#ed6262] flip-card-front bg-cover bg-center text-white text-center items-center rounded-lg p-4">
                    <div className="flex justify-center items-center h-full">
                        <img src={Resp.src} style={{width: "150px", height: "150px"}} className="z-3"/>
                    </div>
                </div>
                <div
                 className="w-full h-full group absolute bg-[#ed6262] flip-card-back bg-cover bg-center text-white flex justify-center text-center rounded-lg p-4">
                    <p className="text-center">{Resp.description}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default RespCard;