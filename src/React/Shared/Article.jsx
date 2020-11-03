import React from 'react';
import styled from 'styled-components'

const Article = ({children}) => {
    // functional component logic
    return (
        <ArticleStyled className="Article">
            <h2>Article</h2>
            {children}
        </ArticleStyled>
    )
}

export default Article;

const ArticleStyled = styled.article`
`