import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import style from "./App.module.css";

// author: { avatar_url: "", name: "", role: ""}
// publisheadAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/LidianeDiniz.png",
      name: "Lidiane Diniz",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "  Fala galeraa 👋 " },
      { type: "paragraph", content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date('2022-11-19 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CIO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "  Fala galeraa 👋 " },
      { type: "paragraph", content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date('2022-11-20 15:18:08'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
        { posts.map(post =>(
          <Post
            key={post.id}
            author={post.author}
            publishedAt={post.publishedAt} 
            content={[]} 
            />
        ))}

        </main>
      </div>
    </div>
  );
}
