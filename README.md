# NEAR Movie Feedback


In this project firstly user came and login with his near wallet. Then he see all listed movies and he also able to give feedback on any move and he also albe to se other users feedback. User can also remove is all feedback.

- This Near Movie Feedback consists of a Smart Contract and it is witten in assembly script.
- Ultimately, the purpose of this project was to build a simple contract to explore how persistent storage, unit tests, and contract calls interact when building on the NEAR ecosystem.

 User Actions
===========

- User log-in using near wallet.
- User give the feedback on the listed movies.
- User see his feedbacks.
- User see all users feedbacks.
- User remove his all feedbacks.
- user log-out using near wallet

Smart Contracts Used in project
====================
This Smart Contract is written in assembly script.

In this contract we have 4 methods :
- getUserFeedback
- getFeedback
- addFeedback
- clearAllFeedback

**getUserFeedback** : This is a view Method where we get one user feedbacks

**getFeedback** : This is a view Method where we getting all users feedbacks.

**addFeedback** : This is a change Method where we add a new feedback.

**clearAllFeedback** : This is a change Method where we clear all feedback of a user.



Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you've installed [Node.js] ≥ 12
2. Install dependencies: `yarn install`
3. Run the local development server: `yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the NEAR TestNet!


Exploring The Code
==================

1. The "backend" code lives in the `/contract` folder. See the README there for
   more info.
2. The frontend code lives in the `/frontend` folder. `/frontend/index.html` is a great
   place to start exploring. Note that it loads in `/frontend/assets/js/index.js`, where you
   can learn how the frontend connects to the NEAR blockchain.


Deploy
======
- Install near-cli `yarn install --global near-cli`
- Create an account for the contract on [NEAR Wallet]
- set contract name in code under `src/config.js`

    const CONTRACT_NAME = process.env.CONTRACT_NAME || 'near-blank-project.YOUR-NAME.testnet'
- After doing that we run `yarn build` command
- And finally run `yarn dev` or `yarn start` command
