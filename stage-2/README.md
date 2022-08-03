# Stage 2 - Start deploying with confidence

## Dependencies
- [Github](https://github.com/)
- [Github Actions](https://github.com/)
- [Node](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [npm](https://www.npmjs.com/)

## Background

You have recently started an engagement for a new customer. Your task is to set up continuous integration (CI) for an existing Create Read Update Delete NodeJS service so the team can deploy more often and with better confidence.

Until now, the feature team have run all validation on their local machines before pushing to the main branch. 


Please write a GitHub actions pipeline (this is free to do for open source repositories) which will trigger on a new push to main and validate the following areas in the pipeline for the project

Test
Build
Lint

Once done, create a new PR with your changes and link ClearRoute the PR to review.

### Notes
- Think about which order you will want to run things.
- You should not have to change any of the app code.
- You don't need to run the app locally.
- It may be easier to use docker to run the database dependency instead of running it locally.
- The project README.md is the best place to look on how to get the app up and running.
