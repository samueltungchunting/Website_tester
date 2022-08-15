import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { v4 } from 'uuid'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Page2 = () => {

    const { t } = useTranslation(["page2"])

    useEffect(() => {
        fetchData()
    }, [])

    // const { data } = useFetch("https://62e8845f93938a545be709bf.mockapi.io/comment")
    const [comment, setComment] = useState(null)
    function fetchData() {
        axios.get("https://62e8845f93938a545be709bf.mockapi.io/comment")
            .then((res) => {
                setComment(res.data)
                console.log(res.data);
            })
            .catch((err) => console.log(err))
    }

    const [commentForm, setCommentForm] = useState({
        comment: "",
        likes: 0,
        id: v4()
    })

    function changeCommentFormData(e) {
        const { name, value } = e.target;
        setCommentForm(prevComment => {
            return ({
                ...prevComment,
                [name]: value
            })
        })
    }

    function postCommentData() {
        axios
        .post("https://62e8845f93938a545be709bf.mockapi.io/comment", commentForm).then((response) => {
            console.log("Posted successfully")
        }).catch((error) => {
            console.log("Failed to post data")
        })
        
        setCommentForm({
            comment: "",
            likes: 0,
            id: null
        })
    }

    function clickChangeLanguage(lang) {
        i18n.changeLanguage(lang)
    }

    const [delectProgress, SetDelectProgress] = useState(false)

    function deleteTheComment(id) {
        SetDelectProgress(true)
        axios.delete(`https://62e8845f93938a545be709bf.mockapi.io/comment/${id}`)
            .then((res) => {
                setComment(comment.filter(item => item.id !== id));
                console.log("deleted", id);
            }).catch(err => {
                window.location.reload()
            }).finally(() => {
                SetDelectProgress(null)
            })
    }
   



    return (
        <div className='home_container'>

            <input 
                type="text" 
                value={commentForm.comment} 
                placeholder={t("comment....test1")}
                onChange={changeCommentFormData}
                name="comment"
                className="comment_form_input"
            />
            <button 
                onClick={postCommentData}
                className="comment_form_post"    
            >
                {t("post")}
            </button>

            <button onClick={() => clickChangeLanguage('en')}>English</button>
            <button onClick={() => clickChangeLanguage('cn')}>中文</button>

            <div className="comments_section">
                <h2>{t("comments")}</h2>
                {comment && !delectProgress ? 
                    comment?.map(item => {
                        return (
                            <div key={item.id}>
                                {item.comment}
                                <button onClick={() => {deleteTheComment(item.id)}}>{t("delete")}</button>
                            </div>
                        )
                    }): <Backdrop
                            sx={{ color: '#007FFF', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open
                        >
                            <CircularProgress 
                                color="inherit"
                                size={100}
                            />
                        </Backdrop>
                }
            </div>
        </div>
  
    )

}

export default Page2