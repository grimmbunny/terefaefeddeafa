import React from "react";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

// Dados de exemplo para os artigos
const articles = [
  {
    id: 1,
    title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
    image: "assets/img/blog/blog-img-1.jpg",
    link: "/article.html",
    category: "Development",
    readTime: "15 min",
    date: "Nov 6, 2023",
  },
  // Adicione mais artigos...
];

function BlogPage() {
  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body">
                <h1 className="main-title">
                  Artigos e <span>Publicações</span>
                </h1>
                <div className="row mt-4">
                  {articles.map((article) => (
                    <div
                      className="col-xl-6 col-lg-4 col-md-6"
                      key={article.id}
                    >
                      <div className="article-publications-item">
                        <div className="image">
                          <Link to={article.link} className="d-block w-100">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="img-fluid w-100"
                            />
                          </Link>
                          <span className="tags">{article.category}</span>
                        </div>
                        <div className="text">
                          <Link to={article.link} className="title">
                            {article.title}
                          </Link>
                          <ul className="list-unstyled">
                            <li>{article.readTime}</li>
                            <li>{article.date}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Paginação aqui */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
