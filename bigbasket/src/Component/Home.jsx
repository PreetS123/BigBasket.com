import React from 'react'
import { Beauty, Bevarages, BnkOffer, Cleaning, DailyStaple, FruitsndVeg, Kitchen, LandingCom, MostPopular, SnackStore, TopOffer } from './LandingCom'
import { UpperSlider } from './Slider/UpperSlider'

export const Home = () => {
  return (
    <div style={{width:'80%',margin:'auto'}}>
        Home
        
        <UpperSlider   image={[
           'https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_Weekdayblore_460_040522.jpg',
           'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Freshodays_Bangalore_460_0405022.jpg',
           'https://www.bigbasket.com/media/uploads/banner_images/hp_c_YXTT611_460_1may22.jpg',
           'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_Happychef_460-250422.jpg',
           'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_GM-SteeltheDeal!_460-250422.jpg',
           'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_skincare_460-250422.jpg',
           'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_Dairy(Curd)_460-250422.jpg'
        ]}/>
        <LandingCom/>
        <BnkOffer/>
        <MostPopular/>
        <TopOffer/>
        <FruitsndVeg/>
        <DailyStaple/>
        <Bevarages/>
        <SnackStore/>
        <Cleaning/>
        <Beauty/>
        <Kitchen/>
    </div>
  )
}
