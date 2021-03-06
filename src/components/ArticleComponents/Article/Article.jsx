import React from "react";
import Navigation from "../../Navigation/Navigation";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import BusinessProcess from "../BusinessProcess/BusinessProcess";
import Newsletter from "../Newsletter/Newsletter";
import Workflow from "../Workflow/Workflow";
import "./Article.css";

const Article = ({ transparent }) => {
  return (
    <div className="article-page">
      <Navigation transparent={transparent} />
      <ArticleHeader />
      <Workflow />
      <BusinessProcess />
      <Newsletter />
    </div>
  );
};

export default Article;
