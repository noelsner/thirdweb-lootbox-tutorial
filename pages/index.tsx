import QuizGame from "../components/quiz-game";
import quizQuestions from "../lib/questions";
import EmailInput from "../components/email-input";

export function getStaticProps() {
  return {
    props: {
      title: "SXSW Lootbox",
    },
  };
}

export default function Home() {
  return <EmailInput />;
}
