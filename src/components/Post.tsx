import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar'
import styles from './Post.module.css'

import { Comment } from './Comment'
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from 'react'

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content{
    type: 'paragraph' | 'link',
    content: string
}

interface PostProps {
    author: Author,
    content: Content[],
    publishedAt: Date

}

export function Post({author, content, publishedAt}:PostProps) {

    // const [comments, setComments] = useState([
    //     {
    //         id: 1,
    //         author: {
    //             avatarUrl: 'https://i.pinimg.com/736x/5e/ea/b2/5eeab299362f3a3e73b87a1516baeb0a.jpg',
    //             name: 'Toji Fushiguro',
    //             role: 'The one who left it all behind'
    //         },
    //         content: [
    //             {type: 'paragraph', content: 'Fala galeraa 👋'},
    //             {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    //             {type: 'link', content: '👉 jane.design/doctorcare'}
    //           ],
    //           publishedAt: new Date('2025-03-15 15:33:33')
    //     },
    //     {
    //         id: 2,
    //         author: {
    //           avatarUrl: "https://i.pinimg.com/736x/27/1b/91/271b91f301cdc2663f6b23a1d33f2ca6.jpg",
    //           name: "Sung JinWoo",
    //           role: "Monarca das sombras"
    //         },
    //         content: [
    //           {type: 'paragraph', content: 'Fala galeraa 👋'},
    //           {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    //           {type: 'link', content: '👉 jane.design/doctorcare'}
    //         ],
    //         publishedAt: new Date('2025-03-13 15:33:33')
    //       },
    // ])

    const [comments, setComments] = useState(['Por uma autoafirmação idiota eu me desviei da minha essencia, foi nesse momento que eu perdi.'])

    const [newCommentText, setNewCommentText] = useState('')

    const publisedAtFormatedDate = format(publishedAt, "dd 'de' MMMM 'às' kk:mm", {
        locale: ptBR
    })

    const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    const handleCreateComment = (event: FormEvent) => {
        event.preventDefault()

        if(newCommentText !== ''){
            setComments([...comments, newCommentText])
            setNewCommentText('')
        }

    }

    const handleChangeNewCommentText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    const deleteComment = (deletedComment: string) => {
        const commentsWithoutDeletedOne = comments.filter(comment => {
           return comment !== deletedComment
        })

        setComments(commentsWithoutDeletedOne)
    }

    const handleSubmitInvalidComment = (event: InvalidEvent<HTMLTextAreaElement>) => {

        event.target.setCustomValidity('')

        setNewCommentText(event.target.value)

    }

    const isNewCommentEmpty = newCommentText.length === 0

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.profile}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                    </div>
                </div>
                <time 
                title={publisedAtFormatedDate}
                dateTime={publishedAt.toISOString()}>
                    {publisedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link'){
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>
                <form onSubmit={handleCreateComment}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                    onChange={handleChangeNewCommentText}
                    value={newCommentText}
                    placeholder='deixe um comentario...'
                    required
                    onInvalid={handleSubmitInvalidComment}
                    />
                    <footer>
                        <button type="submit" className={styles.btnPublish} disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>
                </form>
                <div className='commentList'>
                    {comments.map(comment => {
                        return <Comment
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    })}
                </div>
        </article>
    )
}