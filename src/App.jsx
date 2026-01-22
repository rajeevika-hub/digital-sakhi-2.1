import { Routes, Route } from "react-router-dom";
import Nav from "./components/NAv";
import Footer from "./components/Footer";
import FrontPage from "./Pages/FrontPAge";
import Home from "./Pages/Home";
import ModulePage from "./Pages/ModulePage";
import TopicVideo from "./Pages/TopicVideo";
import TopicNotes from "./Pages/TopicNotes";
import TopicQuiz from "./Pages/TopicQuiz";
import Developers from "./Pages/Developers";
import WebsiteContact from "./Pages/Contact";
import Login from "./certificate/loginUser";
import UserRegister from "./certificate/registerUser";
import ExamInstructions from "./certificate/instructions";
import ExamPage from "./certificate/Exam";
import ResultPage from "./certificate/result";
import InspirationPage from "./Pages/about/Inscpiration";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />


        <Route
          path="/module/:moduleId/topic/:topicId/video"
          element={<TopicVideo />}
        />
        <Route
          path="/module/:moduleId/topic/:topicId/notes"
          element={<TopicNotes />}
        />
        <Route
          path="/module/:moduleId/topic/:topicId/quiz"
          element={<TopicQuiz />}
        />

        <Route path="/developers" element={<Developers />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/contact" element={<WebsiteContact />} />

        {/* certificate routes */}
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<UserRegister />}/>
        <Route path="/instructions" element={<ExamInstructions />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/result/:submitId" element={<ResultPage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
