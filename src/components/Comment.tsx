import { Avatar } from './Avatar'
import style from './Comment.module.css'

import avatar from '../assets/avatar.jpeg'
import { TrashIcon } from '../assets/TrashIcon'
import { AplauseIcon } from '../assets/AplauseIcon'
import { useState } from 'react'

interface CommentProps{
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleAplauseComment = () => {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className={style.commentContainer}>
            <Avatar hasBorder={false} src={avatar} />
            <div className={style.comment}>
                <header>
                    <div className={style.authorInfo}>
                        <span><strong>Toji Fushiguro</strong> (você)</span>
                        <time>Cerca de 2h</time>
                    </div>
                    <button className={style.deleteButton} onClick={handleDeleteComment}>
                        <TrashIcon />
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <div className={style.aplauses}>
                <button onClick={handleAplauseComment}>
                    <AplauseIcon />
                    Aplaudir 
                    <span> • {likeCount}</span>
                </button>
            </div>
        </div>
    )
}