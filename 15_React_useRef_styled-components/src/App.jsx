import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Card } from './components/Card/index.jsx';
import { SummaryForm } from './components/SummaryForm/index.jsx';
import { Section } from './components/Section/index.jsx';

function App() {
  const text1 = `Всем участникам выдаются бумажные кораблики, и каждый по очереди
        рассказывает о себе, как о кораблике ("Мой кораблик зовут "Ксюша", он
        любит читать книги о путешествиях…")`;
  const text2 = `Каждый из ребят получает по бумажной звездочке. На ней они должны написать свое имя. После этого ведущий обходит всех с коробочкой в руках. Каждый бросает в коробку звездочку и громко далее...`;
  const text3 = `Все участники встают в круг. Ведущий называет свое имя и кидает мяч кому-то из ребят. Тот, кто поймал мяч, должен назвать свое имя и бросить мяч другому игроку. Важное условие далее...`;

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="form-container">
        <SummaryForm />
      </div>
      {/* <div className="form-container">
        <Section />
      </div> */}
      
      {/* <div className="list">
        <Card description={text1} tag="blue" title="Кораблик" />
        <Card description={text2} tag="green" title="Звездный дождь" />
        <Card description={text3} tag="violet" title="Летающие имена" />
      </div> */}
    </>
  );
}

export default App;
