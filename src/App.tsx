import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./view/pages/HomePage"
import UserPage from "./view/pages/UserPage"
import PromptPage from "./view/pages/PromptPage"
import SignPage from "./view/pages/SignPage"
import PostPage from "./view/pages/PostPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<HomePage/>}/>
        <Route path="/user"   element={<UserPage/>}/>
        <Route path="/prompt" element={<PromptPage/>}/>
        <Route path="/sign"   element={<SignPage/>}/>
        <Route path="/post"   element={<PostPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
