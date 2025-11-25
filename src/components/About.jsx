import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    });

    return ( 
        <div id="about" className="w-screen min-h-screen">
            <div className="relative flex flex-col items-center gap-5 mb-8 mt-36">  
                <h2 className="font-general text-sm uppercase md:text-[10px] text-black-500"> Welcome to VALORANT</h2>

                <AnimatedTitle title="Enter to this new season <br /> of epic <br /> characters and maps" containerClass="mt-5 !text-red-500 text-center"/>

                <div className="about-subtext">
                    <p className="text-black-500">An epic adventure awaits here </p>
                    <p className="text-black-500">This journey will be different for all players</p>
                </div>
            </div>

            <div className="w-screen h-dvh" id="clip">
                <div className="mask-clip-path about-image">
                    <img 
                        src="img/about.webp"
                        alt="Background"
                        className="absolute top-0 left-0 object-cover size-full"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default About;