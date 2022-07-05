import admin from "../assets/admin.GIF";
import booking from "../assets/booking.GIF";
import ecommerce from "../assets/ecommerce.GIF";
import food from "../assets/food.GIF";
import gallery from "../assets/gallery.GIF";
import keeper from "../assets/keeper.GIF";
import redux from "../assets/redux.GIF";
import tindog from "../assets/tindog.GIF";
import todo from "../assets/todo.GIF";

import "./project.css";
const Project = () => {
  return (
    <div id="myproject">
      <section className="s1">
        <div className="main-container">
          <h3 className="project-header">My Projects</h3>
          <div className="post-wrapper">
            <div>
              <div className="post">
                <a href="https://lekwalbooking.netlify.app" target="_blank">
                  <img class="thumbnail" src={booking} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">Hotel Booking Application</h6>
                  <p className="post-intro">
                    React hotel booking reservation app User Interface design
                    with HTML, CSS, and React Calendar
                  </p>
                  <a href="https://lekwalbooking.netlify.app" target="_blank">
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <a
                  href="https://ecommerceapplekwal.netlify.app"
                  target="_blank"
                >
                  <img class="thumbnail" src={ecommerce} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">Ecommerce Application</h6>
                  <p className="post-intro">
                    React ecommmerce application User Interface
                  </p>
                  <a
                    href="https://ecommerceapplekwal.netlify.app"
                    target="_blank"
                  >
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <a href="https://tindopapp.netlify.app" target="_blank">
                  <img class="thumbnail" src={tindog} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">Tindog Application</h6>
                  <p className="post-intro">
                    Responsive Tindog application with HTML, CSS, Bootstrap.
                  </p>
                  <a href="https://tindopapp.netlify.app" target="_blank">
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <a
                  href="https://lekan-osindeinde.github.io/image-gallery"
                  target="_blank"
                >
                  <img class="thumbnail" src={gallery} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">Tindog Application</h6>
                  <p className="post-intro">
                    Tindog application with HTML, CSS, Bootstrap.
                  </p>
                  <a
                    href="https://lekan-osindeinde.github.io/image-gallery"
                    target="_blank"
                  >
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="post">
                <a
                  href="https://lekan-osindeinde.github.io/keeper-app-part-1/"
                  target="_blank"
                >
                  <img class="thumbnail" src={keeper} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">Keeper App</h6>
                  <p className="post-intro">Keeper application with react.</p>
                  <a
                    href="https://lekan-osindeinde.github.io/keeper-app-part-1/"
                    target="_blank"
                  >
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <a
                  href="https://lekan-osindeinde.github.io/lekwal-admin/"
                  target="_blank"
                >
                  <img class="thumbnail" src={admin} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">Admin dashborad App</h6>
                  <p className="post-intro">Admin dashborad with react.</p>
                  <a
                    href="https://lekan-osindeinde.github.io/lekwal-admin/"
                    target="_blank"
                  >
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <a
                  href="https://lekan-osindeinde.github.io/food-website/"
                  target="_blank"
                >
                  <img class="thumbnail" src={redux} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">React-Redux App</h6>
                  <p className="post-intro">React redux movies search engine</p>
                  <a
                    href="https://lekan-osindeinde.github.io/food-website/"
                    target="_blank"
                  >
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="post">
                <a
                  href="https://lekan-osindeinde.github.io/food-website/"
                  target="_blank"
                >
                  <img class="thumbnail" src={food} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">Food ordering app</h6>
                  <p className="post-intro">
                    Food ordering user interface application{" "}
                  </p>
                  <a
                    href="https://lekan-osindeinde.github.io/food-website/"
                    target="_blank"
                  >
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <a
                  href="https://lekan-osindeinde.github.io/todolist/"
                  target="_blank"
                >
                  <img class="thumbnail" src={todo} alt="" />
                </a>
                <div className="post-preview">
                  <h6 className="post-title">Todo List app</h6>
                  <p className="post-intro">Todo list app with react</p>
                  <a
                    href="https://lekan-osindeinde.github.io/todolist/"
                    target="_blank"
                  >
                    <h6 className="view">View app</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
