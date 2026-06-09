import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactPage } from "./pages/ContactPage";
import { ResumePage } from "./pages/ResumePage";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/work/:slug" element={<CaseStudyPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/resume" element={<ResumePage />} />
            </Routes>
        </BrowserRouter>
    );
};
