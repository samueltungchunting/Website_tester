import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import Page1 from './Page1';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Home = () => {

    const { t } = useTranslation(["home"])

    return (
        <div className='home_container' style={{minHeight: "50vh"}}>
            <h1>{t("title")}</h1>
            <button>{t("button")}</button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: "absolute", bottom: "0", left: "0"}}>
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            {/* <svg style={{objectFit:"cover", repeat: "no-repeat"}} id="my-svg" version="1" baseProfile="full" width="100%" height="100%" viewBox="0 0 1501 848" xmlns="http://www.w3.org/2000/svg"><rect width="1501" height="848" fill="#000"></rect><defs><linearGradient id="linear-gradient" x1="1" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#c81d1150"></stop><stop offset="100%" stop-color="#1c39bb50"></stop></linearGradient></defs>
                <path transform="scale(-1, 1)" style={{transformOrigin:"center"}} d="M 0,848 V 0,508 C 145.02976190476193,515.7142857142858 290.05952380952385,523.4285714285714 434,561 C 577.9404761904761,598.5714285714286 720.7916666666665,666.0000000000001 815,668 C 909.2083333333335,669.9999999999999 954.7738095238096,606.5714285714286 1061,569 C 1167.2261904761904,531.4285714285714 1334.1130952380952,519.7142857142858 1501,508 C 1501,508 1501,848 1501,848 Z" stroke="none" stroke-width="0" fill="url(#linear-gradient)" class="transition-all duration-300 ease-in-out delay-150"></path><defs><linearGradient id="linear-gradient" x1="1" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#c81d1160"></stop><stop offset="100%" stop-color="#1c39bb60"></stop></linearGradient></defs>
                <path transform="scale(-1, 1)" style={{transformOrigin:"center"}} d="M 0,848 V 0,763 C 114.8154761904762,784.1785714285714 229.6309523809524,805.3571428571429 371,777 C 512.3690476190476,748.6428571428571 680.2916666666667,670.7499999999999 792,624 C 903.7083333333333,577.2500000000001 959.202380952381,561.6428571428572 1068,590 C 1176.797619047619,618.3571428571428 1338.8988095238096,690.6785714285713 1501,763 C 1501,763 1501,848 1501,848 Z" stroke="none" stroke-width="0" fill="url(#linear-gradient)" class="transition-all duration-300 ease-in-out delay-150"></path><defs><linearGradient id="linear-gradient" x1="1" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#c81d1170"></stop><stop offset="100%" stop-color="#1c39bb70"></stop></linearGradient></defs>
                <path transform="scale(-1, 1)" d="M 0,848 V 0,1144 C 121.5654761904762,1237.642857142857 243.1309523809524,1331.2857142857142 384,1269 C 524.8690476190476,1206.7142857142858 685.0416666666667,988.4999999999999 810,965 C 934.9583333333333,941.5000000000001 1024.702380952381,1112.7142857142858 1134,1175 C 1243.297619047619,1237.2857142857142 1372.1488095238096,1190.642857142857 1501,1144 C 1501,1144 1501,848 1501,848 Z" stroke="none" stroke-width="0" fill="url(#linear-gradient)" class="transition-all duration-300 ease-in-out delay-150" style={{transformOrigin: "center center"}}></path><defs><linearGradient id="linear-gradient" x1="1" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#c81d1180"></stop><stop offset="100%" stop-color="#1c39bb80"></stop></linearGradient></defs>
                <path transform="scale(-1, 1)" d="M 0,848 V 0,1717 C 134.70833333333334,1652.142857142857 269.4166666666667,1587.2857142857142 378,1601 C 486.5833333333333,1614.7142857142858 569.0416666666666,1706.9999999999998 701,1707 C 832.9583333333334,1707.0000000000002 1014.4166666666667,1614.7142857142858 1156,1601 C 1297.5833333333333,1587.2857142857142 1399.2916666666665,1652.142857142857 1501,1717 C 1501,1717 1501,848 1501,848 Z" stroke="none" stroke-width="0" fill="url(#linear-gradient)" class="transition-all duration-300 ease-in-out delay-150" style={{transformOrigin: "center center"}}></path><defs><linearGradient id="linear-gradient" x1="1" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#c81d1190"></stop><stop offset="100%" stop-color="#1c39bb90"></stop></linearGradient></defs>
                <path transform="scale(-1, 1)" d="M 0,848 V 0,2575 C 114.81547619047618,2641.535714285714 229.63095238095235,2708.0714285714284 348,2688 C 466.36904761904765,2667.9285714285716 588.2916666666667,2561.2499999999995 717,2540 C 845.7083333333333,2518.7500000000005 981.202380952381,2582.9285714285716 1113,2603 C 1244.797619047619,2623.0714285714284 1372.8988095238096,2599.035714285714 1501,2575 C 1501,2575 1501,848 1501,848 Z" stroke="none" stroke-width="0" fill="url(#linear-gradient)" class="transition-all duration-300 ease-in-out delay-150" style={{transformOrigin: "center center"}}></path><defs><linearGradient id="linear-gradient" x1="1" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#c81d11ff"></stop><stop offset="100%" stop-color="#1c39bbff"></stop></linearGradient></defs>
                <path transform="scale(-1, 1)" d="M 0,848 V 0,3863 C 86.06547619047618,3939.464285714286 172.13095238095235,4015.9285714285716 311,4014 C 449.86904761904765,4012.0714285714284 641.5416666666667,3931.75 789,3929 C 936.4583333333333,3926.25 1039.702380952381,4001.0714285714284 1151,4003 C 1262.297619047619,4004.9285714285716 1381.6488095238096,3933.964285714286 1501,3863 C 1501,3863 1501,848 1501,848 Z" stroke="none" stroke-width="0" fill="url(#linear-gradient)" class="transition-all duration-300 ease-in-out delay-150" style={{transformOrigin: "center center"}}></path>
            </svg> */}
            <svg style={{maxHeight: "300px"}} id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop><stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop></linearGradient></defs>
                <path fill="url(#sw-gradient)" d="M7.6,-12.8C10.2,-11.6,12.9,-10.3,19.4,-8.2C25.8,-6,36.1,-3,40.5,2.6C45,8.2,43.7,16.3,38.4,20.5C33.1,24.6,23.7,24.8,16.7,25.7C9.6,26.6,4.8,28.3,-1.4,30.6C-7.5,32.9,-15,36,-21.3,34.6C-27.6,33.3,-32.7,27.6,-36.9,21.1C-41,14.5,-44.3,7.3,-42.2,1.2C-40.1,-4.9,-32.8,-9.8,-28.5,-16C-24.2,-22.3,-22.9,-29.9,-18.7,-30.1C-14.4,-30.3,-7.2,-23.2,-2.4,-19.1C2.5,-15,5,-13.9,7.6,-12.8Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{transition: "all 0.3s ease 0s;"}} stroke="url(#sw-gradient)"></path>              
            </svg>

        </div>
  
    )

}

export default Home  

