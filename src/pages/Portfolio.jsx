import Project from '../components/Project'
import '../styles/Page.css';

export default function Portfolio() {
  return (
    <div className="p-5">
      <div className="row">
        <Project image={'https://media.istockphoto.com/id/166396032/photo/holding-a-white-blank-final-piece-of-the-jigsaw.jpg?s=612x612&w=0&k=20&c=SeyBgmUaqVbhr_Wkql90QgN7URBfRZAMmu0wOFdVk5k='} title={"Puzzle Project"} />
        <Project image={'https://t4.ftcdn.net/jpg/02/81/02/63/360_F_281026300_lAO74tXEb7rXPpUyR1antfcfXQSBEtdq.jpg'} title={"Calculator"} />
        <Project image={'https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg'} title={"AI Cartoon Generator"} />
        <Project image={'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg'} title={"Sports API"} />
      </div>
    </div>
  );
}
