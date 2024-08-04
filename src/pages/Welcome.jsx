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
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve
          </p>
        </section>
        <Link id="cta-link" to="/challenges">
          Log your todo's
        </Link>
      </main>
    </>
  );
}
