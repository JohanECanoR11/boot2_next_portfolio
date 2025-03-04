import Layout from "@/components/Layout";
import Link from "next/link";

import { skills, experiences, projects } from "@/pages/profile";

export default function Home() {
  return (
    <Layout footer={true}>
      {/* Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4 text-center">
                <img src="/profile_johan.png" alt="profile Johan Cano" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Johan Eduardo Cano Ruiz</h1>
                <h3>Junior Developer</h3>
                <p>
                  Estudiante de Ingeniería en Sistemas con un gran interés en el desarrollo de software. Tengo
                  gran capacidad para adaptarme a todo tipo de entornos y aportar siempre lo mejor de mí. Me
                  caracterizo por mi facilidad para el trabajo en equipo y mi entusiasmo por aprender y
                  desarrollar mis habilidades.
                </p>
                <Link href="/hireme" className="btn btn-outline-light">
                  Contáctame
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section */}

      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Habilidades</h1>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experiencia</h1>

              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/hireme" className="btn btn-light">
                Saber más...
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Porfolio */}
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img src={`/${image}`} alt="project" className="card-img-top" />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#!">Saber más...</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/portfolio" className="btn btn-outline-light">
                      Proyectos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}