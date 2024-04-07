import React from "react";
import styled from 'styled-components';
import './Hero.css';
 
 

function Hero () {
    return(
        <>


<main class="wrapcont">
    <div className="alignlorem">
    <div className="left-part">
        <div className="paracont">
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </p>
        </div>
    </div>
    
        <div class="right-part" >
            <div class="bg-line">
                <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="Line"/>
                <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="Line"/>
            </div>

            <div class="main-grid d-flex">
                <div class="box">
                    <span>Photography</span>
                </div>
                <div class="box">
                    <div class="bg-img">
                        <img src="https://www.yudiz.com/codepen/photography-banner/photography.png" alt="Photography"/>
                    </div>
                </div>
                <div class="box">
                    <span>Under Water</span>
                </div>
                <div class="box">
                    <span>Videography</span>
                </div>
                <div class="box">
                    <div class="bg-img">
                        <img src="https://www.yudiz.com/codepen/photography-banner/VFX.png" alt="VFX"/>
                    </div>
                </div>
                <div class="box">
                    <div class="bg-img">
                        <img src="https://www.yudiz.com/codepen/photography-banner/under-water.png" alt="VFX"/>
                    </div>
                </div>
                <div class="box">
                    <span>Videography</span>
                </div>
                <div class="box">
                    <div class="bg-img">
                        <img src="https://www.yudiz.com/codepen/photography-banner/Videography.png" alt="Videography"/>
                    </div>
                </div>
            </div>

            <div class="bg-circle-h-line">
                <img src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg" alt="Horizontal-circle"/>
                <img src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg" alt="Horizontal-circle"/>
                <img src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg" alt="Horizontal-circle"/>
            </div>
            <div class="bg-dash-circle">
                <img src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg" alt="dash-circle"/>
            </div>
        </div>
        </div>
</main>
        </>
    )
}

export default Hero;