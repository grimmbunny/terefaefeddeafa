import React from "react";
import ProfileCard from "../components/ProfileCard";

function ArticlePage() {
  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body article-details-card">
                <div className="article-details-area">
                  <div className="main-image">
                    <img
                      src="assets/img/blog/blog-img-1.jpg"
                      alt="blog-img-1"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="article-details-text">
                    <h3 className="main-title">
                      Want To Upgrade Your Brain? Stop Doing 7 Things
                    </h3>
                    <p>Conteúdo do seu artigo aqui...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlePage;
