import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

function ArticlesListPage() {
    return (
        <>
            <h1>List of Articles</h1>
            <ArticlesList articles={articleContent} />
        </>
    )
}

export default ArticlesListPage;
