This program has two things it can do with Google Analytics

1. Add/Delete analytic users by email from account level based on what accounts you already have manager access to.
2. Add/Delete view filters for websites
* Note all output will be on console


How To Use

1. Install
  * You need to download Node (https://nodejs.org/en/download/)
  * Download or git this repo (run "git clone https://github.com/Jlfaaborg/Analytics.git" from terminal in directory you want repo to go)
  * From same directory as repo run "npm install --save --save-dev"

2. Config
  * Got config gapi.ts to add client secret and id
  * Config filter.ts to add filters you want (right now its just spam filters)

3. Run
  * Run "npm run dev" from terminal. This can take a a few minutes to start the actual program.
  * Login to analytics account you want to use a "master account"
  * User
    1. Insert wanted email to either remove or add. Press button
    2. Select which account you want to add the email to. Press either button
  * Analytics
    1. Insert cooresponding fields to form. Hit either button. DONE.