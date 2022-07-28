import "./AboutStyle.css";
import EkorNav from "./EkorNav";
function About() {
  return (
    <>
      <EkorNav />
      <section class="section-team">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8 col-lg-6">
              <div class="header-section">
                <h3 class="small-title">Our Experts</h3>
                <h2 class="titlee">Let's meet with our team members</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-4 col-xl-3">
              <div class="single-person">
                <div class="person-image">
                  <img src="https://img.icons8.com/bubbles/500/000000/user-male.png" />
                  <span class="icon">
                    <i class="fab fa-html5"></i>
                  </span>
                </div>
                <div class="person-info">
                  <h3 class="full-name">Chirag Yadav</h3>
                  <span class="speciality">React Developer</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
              <div class="single-person">
                <div class="person-image">
                  <img src="https://img.icons8.com/clouds/500/000000/user-male.png" />
                  <span class="icon">
                    <i class="fab fa-wordpress-simple"></i>
                  </span>
                </div>
                <div class="person-info">
                  <h3 class="full-name">Prathamesh Lade</h3>
                  <span class="speciality">React Developer</span>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3">
              <div class="single-person">
                <div class="person-image">
                  <img src="https://img.icons8.com/bubbles/500/000000/user-male.png" />
                  <span class="icon">
                    <i class="fab fa-angular"></i>
                  </span>
                </div>
                <div class="person-info">
                  <h3 class="full-name">Shubham Suthar</h3>
                  <span class="speciality">React Developer</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
              <div class="single-person">
                <div class="person-image">
                  <img src="https://img.icons8.com/bubbles/500/000000/user-female.png" />
                  <span class="icon">
                    <i class="fab fa-js"></i>
                  </span>
                </div>
                <div class="person-info">
                  <h3 class="full-name">Siya Kumari</h3>
                  <span class="speciality">React Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
