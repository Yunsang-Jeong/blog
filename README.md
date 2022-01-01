Github pages에 `Vite for vue js 3`와 `tailwind`를 통해 간단한 블로그를 구성하는 내용입니다.

# Github pages

배포되는 도메인은 `https://yunsang-jeong.github.io/blog/` 이며 `gh-pages` 브랜치의 `/`가 서비스 됩니다.

## branch

개발편의를 위해서 `main` 브랜치의 `submodule`로써 `./dist` 디렉토리를 `gh-pages` 브랜치로 사용하고 있습니다.

## Deploy

기본적으로 Github pages는 jekyll가 기본값이다 보니 Github Action을 통해 빌드가 자동으로 진행됩니다. Vue를 통해 페이지를 구성했기에, `gh-pages` 브랜치의 `.nojekyll` 파일을 생성하여 jekyll로써의 빌드를 막았습니다.

> 실제 `.nojekyll`의 위치는 편의를 위해 `./public/.nojekyll`에 위치하고 있습니다.

<br />

# Posting

블로그의 글은 모두 Markdown으로 작성해야하며 `./public/posts/` 디렉토리에 위치해야합니다. 그리고 모든 블로그 글에 대한 정보는 `./public/posts/index.json`에 기록하고 있습니다. 따라서, 신규 글을 작성하거나 수정, 삭제하는 경우에는 `./public/posts/index.json`의 수정이 합니다.

> `./public/posts/index.json`를 자동으로 갱신하기 위해 Github Action을 활용할 계획입니다.

<br />

# Reference

다음은 참고한 블로그입니다.
 - https://github.com/vycoder/vue-markdown-blog/
 - https://dev.to/vycoder/creating-a-simple-blog-using-vue-with-markdown-2omd
