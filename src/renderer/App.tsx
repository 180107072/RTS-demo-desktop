import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import css from './app.module.css';
import { TitleBar } from './containers/titlebar';
import { Chat } from './containers/chat';
import { WelcomeMessage } from './containers/headlines/welcome_message';

const Hello = () => {
  return (
    <>
      <TitleBar />
      <div className={css.main_wrapper}>
        <WelcomeMessage />
        <Chat />
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
