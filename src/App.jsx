import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { JournalPage } from "./pages/JournalPage"
import { JournalOnePage } from "./pages/JournalOnePage"
import { Backtest } from "./pages/Backtest"
import { AddJournal } from "./pages/AddJournal"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/journal/:id" element={<JournalOnePage />} />
      <Route path="/backtest" element={<Backtest />} />
      <Route path="/add" element={<AddJournal />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
