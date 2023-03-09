import UserDisplay from './components/UserDisplay'
import type { User } from './types'
function App() {
  const users: User[] = [
    {
      name: "mr A",
      messages: [
        { body: "Hello" },
        { body: "Whats up" }
      ]
    }
  ]
  return (
    <div className=" bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-auto">
      {users.map((user, i) => <UserDisplay user={user} key={i} />)}
    </div>
  )
}

export default App
