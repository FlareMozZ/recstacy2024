import React, { useState, useEffect, useRef } from 'react';

const Cube = () => {
  const [rotationPaused, setRotationPaused] = useState(false);
  const cubeRef = useRef(null);
  const playIconRef = useRef(null);
  const pauseIconRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const cube = cubeRef.current;
    const playIcon = playIconRef.current;
    const pauseIcon = pauseIconRef.current;
    const toggleButton = toggleButtonRef.current;

    const toggleRotation = () => {
      const animationState = window.getComputedStyle(cube).animationPlayState;

      if (animationState === 'running') {
        cube.style.animationPlayState = 'paused';
        playIcon.style.display = 'inline-block';
        pauseIcon.style.display = 'none';
      } else {
        cube.style.animationPlayState = 'running';
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline-block';
      }
    };

    const handleKeyDown = (event) => {
      if (event.code === 'Space' || (event.target === toggleButton && event.type === 'click')) {
        event.preventDefault();
        toggleRotation();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="canvas"
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        overflow: 'hidden',
      }}
      tabIndex={0}
    >
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotateY(0deg) rotateX(0deg);
            }
            to {
              transform: rotateY(360deg) rotateX(360deg);
            }
          }
        `}
      </style>
      <div className="cube-wrapper" style={{ perspective: '1000px', filter: 'drop-shadow(0px 20px 60px rgba(255, 255, 255, 0.2))' }}>
        <div className="cube" ref={cubeRef} style={{ width: 'clamp(150px, 40vw, 400px)', height: 'clamp(150px, 40vw, 400px)', position: 'relative', transformStyle: 'preserve-3d', animation: 'rotate 8s infinite linear' }}>
          <div className="side front" style={{ position: 'absolute', width: 'clamp(150px, 40vw, 400px)', height: 'clamp(150px, 40vw, 400px)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'white', border: '1px solid #fff', borderRadius: '25px', backgroundSize: 'cover', backgroundPosition: 'center center', filter: 'contrast(1.1)', transition: '200ms', backgroundColor: '#ff7f0e', backgroundImage: 'url("https://images.pexels.com/photos/667225/pexels-photo-667225.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1")', transform: 'translateZ(calc(clamp(150px, 40vw, 400px) / 2))' }}></div>
          <div className="side back" style={{ position: 'absolute', width: 'clamp(150px, 40vw, 400px)', height: 'clamp(150px, 40vw, 400px)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'white', border: '1px solid #fff', borderRadius: '25px', backgroundSize: 'cover', backgroundPosition: 'center center', filter: 'contrast(1.1)', transition: '200ms', backgroundColor: '#2ca02c', backgroundImage: 'url("https://images.pexels.com/photos/11702792/pexels-photo-11702792.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1")', transform: 'rotateY(180deg) translateZ(calc(clamp(150px, 40vw, 400px) / 2))' }}></div>
          <div className="side left" style={{ position: 'absolute', width: 'clamp(150px, 40vw, 400px)', height: 'clamp(150px, 40vw, 400px)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'white', border: '1px solid #fff', borderRadius: '25px', backgroundSize: 'cover', backgroundPosition: 'center center', filter: 'contrast(1.1)', transition: '200ms', backgroundColor: '#1f77b4', backgroundImage: 'url("https://images.pexels.com/photos/6473147/pexels-photo-6473147.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1")', transform: 'rotateY(-90deg) translateZ(calc(clamp(150px, 40vw, 400px) / 2))' }}></div>
          <div className="side right" style={{ position: 'absolute', width: 'clamp(150px, 40vw, 400px)', height: 'clamp(150px, 40vw, 400px)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'white', border: '1px solid #fff', borderRadius: '25px', backgroundSize: 'cover', backgroundPosition: 'center center', filter: 'contrast(1.1)', transition: '200ms', backgroundColor: '#d62728', backgroundImage: 'url("https://images.pexels.com/photos/11512740/pexels-photo-11512740.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1")', transform: 'rotateY(90deg) translateZ(calc(clamp(150px, 40vw, 400px) / 2))' }}></div>
          <div className="side top" style={{ position: 'absolute', width: 'clamp(150px, 40vw, 400px)', height: 'clamp(150px, 40vw, 400px)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'white', border: '1px solid #fff', borderRadius: '25px', backgroundSize: 'cover', backgroundPosition: 'center center', filter: 'contrast(1.1)', transition: '200ms', backgroundColor: '#9467bd', backgroundImage: 'url("https://images.pexels.com/photos/17081254/pexels-photo-17081254.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1")', transform: 'rotateX(90deg) translateZ(calc(clamp(150px, 40vw, 400px) / 2))' }}></div>
          <div className="side bottom" style={{ position: 'absolute', width: 'clamp(150px, 40vw, 400px)', height: 'clamp(150px, 40vw, 400px)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'white', border: '1px solid #fff', borderRadius: '25px', backgroundSize: 'cover', backgroundPosition: 'center center', filter: 'contrast(1.1)', transition: '200ms', backgroundColor: '#8c564b', backgroundImage: 'url("https://images.pexels.com/photos/3151186/pexels-photo-3151186.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1")', transform: 'rotateX(-90deg) translateZ(calc(clamp(150px, 40vw, 400px) / 2))' }}></div>
        </div>
      </div>

      <button className="toggle-button" ref={toggleButtonRef} style={{ position: 'absolute', top: '1rem', right: '1rem', width: '60px', height: '60px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', outline: 'none' }} onClick={() => setRotationPaused(prevState => !prevState)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={rotationPaused ? 'play-icon' : 'pause-icon'}>
          {rotationPaused ?
            <polygon points="5 3 19 12 5 21 5 3"></polygon> :
            <><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></>
          }
        </svg>
      </button>
    </div>
  );
};

export default Cube;
