# JFrog Build Info
## Setup
Clone the repo and run `yarn` in the root folder.
## Starting the dev Server
Run `yarn dev`. The default port would be `8080` and you can visit your local instance at [http://localhost:8080/](http://localhost:8080/)
## Editing homepage
Go to `src/pages/Index.vue` and edit the content between the `<Layout></Layout>` tags. Make sure everything compiles well in the dev server before deploying to Github Pages
## Deploy to Github Pages
first push your changes to the repo, then `yarn deploy`
