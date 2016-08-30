# Personal Site

Welcome to building out your first personal site! Here are some basic things you need to know to get developing:

- *DO NOT WRITE DIRECTLY INTO THE CSS FOLDER.* Write all of your styles in the [Sass](http://sass-lang.com/) files. Gulp automatically compiles your Sass into CSS so write all of your styles into the .scss files; otherwise, your styles will get overwritten.
- Install [node & npm](https://nodejs.org/en/download/) to use gulp
- [Gulp](http://gulpjs.com/) is a build system that makes development a little easier for us by compiling our Sass and automatically reloading

To duplicate the contents of this repo into your own repo, please follow the instructions [here](https://help.github.com/articles/duplicating-a-repository/) or type these:

```bash
git clone --bare https://github.com/uiucwebmonkeys/personal-site.git
# Make a bare clone of the repository

cd old-repository.git
git push --mirror https://github.com/<your username here>/<your repository here>.git
# Mirror-push to the new repository

cd ..
rm -rf personal-site.git
# Remove our temporary local repository
```

To get started with this:

```bash
npm install
gulp build
```

Every time you want to start development with live reloading, now just type:

```bash
gulp
```

Before pushing your changes to Github for hosting, ensure that your Sass has compiled to CSS. To see your site hosted with Github pages, create a branch called `gh-pages` on your repository, and go to your settings page for the url.
