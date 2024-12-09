import Header from "../components/header/Header";
import avatar from "./../../src/img/avata.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <section className="info section">
            <div className="info__container">
              <div className="info__left">
                <div className="info__title">
                  <h2>Crafting Engaging User Experiences</h2>
                </div>
                <div className="info__desc">
                  <p>
                    Hi! My name is Ilya, and I am a dedicated frontend developer
                    with a deep passion for crafting modern, highly interactive
                    web applications. Over the years, I have honed my skills in
                    the React and TypeScript ecosystem, gaining a comprehensive
                    understanding of how to build scalable, efficient, and
                    maintainable applications. My expertise lies not only in
                    writing clean and performant code but also in understanding
                    the user's journey through intuitive UI/UX design, ensuring
                    that every interface is both functional and visually
                    appealing.
                  </p>
                  <br />
                  <p>
                    I have worked on a diverse range of projects. I am
                    experienced in utilizing advanced React participation such
                    as hooks (useState, useEffect, useContext) to manage state
                    and lifecycle within components, as well as handling complex
                    routing with React Router for creating dynamic,
                    user-friendly navigation systems. Additionally, I have a
                    strong grasp of TypeScript, which allows me to write more
                    robust and reliable code by adding static typing, reducing
                    errors, and improving the maintainability of large
                    codebases.
                  </p>
                  <br />
                  <p>
                    Ultimately, my goal is to build applications that provide
                    real value to users, are easy to use, and scale effectively
                    over time. Whether it's optimizing performance, ensuring
                    accessibility, or collaborating with teams to bring an idea
                    to life, I am always focused on delivering the best possible
                    result for both users and stakeholders.
                  </p>
                </div>
              </div>
              <div className="info__right">
                <div className="info__img">
                  <img src={avatar} alt="info" />
                </div>
              </div>
            </div>
          </section>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ReactJS, TypeScript, Redux, MobX, HTML, CSS, NPM,
                Yarn, TailwindCSS, StyledComponents, Bootstrap, SCSS
              </p>
              <br />
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL</p>
              <h2 className="title-2">Other Technologies</h2>
              <p>Git, Figma, Photoshop</p>
            </li>
          </ul>
          <section class="participation">
            <div class="participation__container">
              <h2>Projects with my participation</h2>

              <div class="participation-box">
                <h2>Praterion</h2>

                <h3>Service for buying and selling via blockchain</h3>
                <p>Stack: React and Typescript</p>
                <br />
                <p>
                  Engaged in the development and implementation of interfaces,
                  interacted with web 3 technologies. Implemented the wallet
                  connection, configuration of this functionality and much more
                </p>
                <a href="https://praterion.com/">Available at the link</a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
