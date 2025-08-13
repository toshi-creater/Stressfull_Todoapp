import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthGuard from "./components/AuthGuard";
import { supabase } from "./lib/supabase";
import { logon } from "./features/auth/authSlice";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { fetchTodo } from "./features/todos/operations";
import { AllPage } from "./pages/app/AllPage";
import { ImportantPage } from "./pages/app/ImportantPage";
import { DonePage } from "./pages/app/DonePage";
import { TodayPage } from "./pages/app/TodayPage";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const init = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if(session?.user) {
                dispatch(logon(session.user))
                dispatch(fetchTodo(session.user.id))
            }
        }

        init()
    }, [dispatch])

    return (
      <BrowserRouter>
          <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/app" element={<AuthGuard />}>
                  <Route path="today" element={<TodayPage />} />
                  <Route path="important" element={<ImportantPage />} />
                  <Route path="all" element={<AllPage />} />
                  <Route path="done" element={<DonePage />} />
              </Route>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
