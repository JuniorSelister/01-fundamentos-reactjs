import './global.css';
import styles from './App.module.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post from './components/Post';

import robin from './assets/robin-avatar.jpeg';
import penguin from './assets/penguin-avatar.png';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: robin,
      name: 'Dick Grayson',
      role: 'Web Developer at Wayne\'s Corporation'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' },
      
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: penguin,
      name: 'Oswald Cobblepot',
      role: 'Criminal from Gothan Streets'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' },
      
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
]

const App = () => {

  return (
    <div className="App">
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

export default App;