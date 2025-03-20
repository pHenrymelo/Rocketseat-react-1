import { Header } from './components/Header.jsx'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar.jsx'
import { Post } from './components/Post.jsx'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/736x/5e/ea/b2/5eeab299362f3a3e73b87a1516baeb0a.jpg',
      name: 'Toji Fushiguro',
      role: 'The one who left it all behind'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-03-15 15:33:33')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://i.pinimg.com/736x/27/1b/91/271b91f301cdc2663f6b23a1d33f2ca6.jpg",
      name: "Sung JinWoo",
      role: "Monarca das sombras"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-03-13 15:33:33')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://i.pinimg.com/736x/36/20/8b/36208b2dd04713bec9e9701a40b55bbf.jpg",
      name: "Michael Kaiser",
      role: "Imperador do Futebol"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-03-14 15:33:33')
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}> 
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post 
              key={post.id }
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}

