  import React, { useEffect, useRef, useState } from 'react'
  import style from './upper.module.css'
export const UpperSlider = ({image}) => {
      const [index, setIndex]= useState(0);
      const tRef= useRef();
      useEffect(()=>{
        start();
        return()=>{
          stopTimer();
        };
      },[]);
      const start=()=>{
        tRef.current= setInterval(()=>{
          setIndex(function(prev){
            if(prev===image.length-1){
              return prev=0;
            }
            else{
              return prev+1;
            }
          })
        },3000)
      };
      const stopTimer=()=>{
        clearInterval(tRef.current);
      }
    return (
      <>
      <div className={style.slider}>
          <img src={image[index]} alt="404" width='100%'/>
      </div>
      </>
    )
  }
  