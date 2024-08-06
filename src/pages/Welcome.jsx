import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <>
      <header id="welcome-header">
        <div id="welcome-header-content">
          <h1>UpliftHub</h1>
        </div>
      </header>
      <main id="welcome-content">
        <section>
          <h2>your ultimate productivity companion!</h2>
          <p>
            Say goodbye to chaos and hello to a seamless flow of productivity.
            From personal errands to professional projects, UpliftHub keeps you
            on track with customizable lists, timely reminders, and insightful
            progress tracking.
          </p>
        </section>
        <Link id="cta-link" to="/challenges">
          Log your todo's
        </Link>
      </main>
    </>
  );
}
