import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from "./components/Post/Post";
import { Comment } from "./components/Comment/Comment";

import './global.css'
import styles from './App.module.css'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/muricristiano.png",
      name: 'Murilo Cristiano',
      role: 'JavaScript Developer'
    },
    content: [
      {type: 'paragraph', content: `Hello guys 👋`},
      {type: 'paragraph', content: `I've just uploaded another project to my portfolio. It's a project I built using React and Node. The project is called DoctorCare 🚀`},
      {type: 'link', content: `github.com/example/doctorcare`},
    ],
    publishedAt: new Date('2023-07-07 09:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80",
      name: 'Alex Smith',
      role: 'Junior Developer'
    },
    content: [
      {type: 'paragraph', content: `Hello guys 👋`},
      {type: 'paragraph', content: `I've just uploaded another project to my portfolio. It's a project I built using React and Node. The project is called DoctorCare 🚀`},
      {type: 'link', content: `github.com/example/doctorcare`},
    ],
    publishedAt: new Date('2023-07-07 09:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80",
      name: 'Johnny Arts',
      role: 'UI/UX Designer'
    },
    content: [
      {type: 'paragraph', content: `Hello guys 👋`},
      {type: 'paragraph', content: `I've just uploaded another project to my portfolio. It's a project I built using React and Node. The project is called DoctorCare 🚀`},
      {type: 'link', content: `github.com/example/doctorcare`},
    ],
    publishedAt: new Date('2023-07-07 09:00:00')
  }
]

export function App() {
  return (
    <div>
      
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )  
            })}
          </main>
      </div>

    </div>
  )
}
