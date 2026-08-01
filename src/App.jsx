import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardPage } from "./pages/DashboardPage"
import { JournalPage } from "./pages/JournalPage"
import { JournalOnePage } from "./pages/JournalOnePage"
import { Backtest } from "./pages/Backtest"
import { AddJournal } from "./pages/AddJournal"
import { Home } from "./pages/Home"
import { Login } from "./components/HOME/Login"
import './custom.css'
import ProtectedRoute from "./routes/ProtectedRoute"
import { Calendar } from "./pages/Calendar"
import { RiskManager } from "./pages/RiskManager"
import { Gallery } from "./pages/Gallery"
import { Drawdown } from "./pages/Drawdown"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/journal/:id" element={<JournalOnePage />} />
      <Route path="/backtest" element={<Backtest />} />
      <Route path="/add" element={<AddJournal />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/risk" element={<RiskManager />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/drawdown" element={<Drawdown />} />
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
