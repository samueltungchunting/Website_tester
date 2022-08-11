import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import Page1 from './Page1';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Home = () => {

    const { t } = useTranslation(["home"])

    return (
        <div className='home_container'>
            <h1>{t("title")}</h1>
            <button>{t("button")}</button>
        </div>
  
    )

}

export default Home  