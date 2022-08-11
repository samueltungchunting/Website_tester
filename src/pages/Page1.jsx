import React, { useEffect, useState, Suspense } from 'react'
import Axios from 'axios'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Page1 = () => {

    const { t } = useTranslation(["page1"])

    const postsURL1 = "http://localhost:3000/posts"
    const [page1Test, setPage1Test] = useState("")

    useEffect(() => {
        Axios
            .get(`${postsURL1}/${1}`)
            .then((res) => {
                setPage1Test(res.data.id)
                console.log(res.data);
            })
    }, [])



    // function fetchDataFromLocalHost() {
    //     Axios
    //         .get(`${postsURL1}/${1}`)
    //         .then((res) => {
    //             setPage1Test(res.data.id)
    //         })
    //     console.log(page1Test);
    // }

    const xyz = {
        userName: {
            name: "Samuel"
        },
        comment: {
            comment: "API debug so annoying",
            likes: 108
        },
        date: {
            day: 2,
            month: 8,
            year: 2022
        },
    }

    function postPage2Data() {
        Axios.post(`${postsURL1}`, xyz)
            .then((res) => {
                alert("Success!")
            }).catch((err) => {
                alert("Failed...")
            })
    }

    function pullPage2Data() {
        Axios.patch(`${postsURL1}/2`, {
            userName: "Gigi",
        }).then((res) => console.log("success"))
    }

    function deletePage2Data() {
        Axios.delete(`${postsURL1}/2`)
            .then((res) => alert("success"))
    }

    function clickChangeLanguage(lang) {
        i18n.changeLanguage(lang)
    }

  return (
    <div>
        <button onClick={() => clickChangeLanguage('en')}>English</button>
        <button onClick={() => clickChangeLanguage('cn')}>中文</button>


        <button> {t("fetch")} </button>
        <button onClick={postPage2Data}>{t("add")}</button>
        <button onClick={pullPage2Data}>{t("pull")}</button>
        <button onClick={deletePage2Data}>{t("delete")}</button>

        <h2>{t("title")}: {page1Test}</h2>
    </div>
  )
}

export default Page1