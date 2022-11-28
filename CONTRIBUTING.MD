## A. Setting up the Project
1. Fork this repository.

2. Clone your forked copy of the project.

```
git clone --depth 1 https://github.com/<your_user_name>/ecommerce-nextjs.git
```

3. Navigate to the project directory 📁 .
```
cd ecommerce-nextjs
```
4. Add a reference to the original repository.
```
git remote add upstream https://github.com/jonathans199/ecommerce-nextjs.git 
```
5. Check the remotes for this repository.
```
git remote -v
```
6. Always take a pull from the upstream repository to your MAIN branch to keep it at par with the main project(updated repository).
```
git pull upstream main
```

## B. Contributing to the Project
Once the project maintainer(s)/mentor(s) have reviewed the issue/assigned you the issue. Start working on the changes.
1. Create a new branch (DO NOT name it MAIN or MASTER or anything random).
```
git checkout -b <your_branch_name>
```
2. Perform your desired changes to the code base.

Make sure that you do not change any code unrelated to the task that you have been assigned

Ensure that your changes apply to all screen sizes

Comment any new code addition(s)

Do not mess up the directory structure

Preview your changes and test them properly before proceeding ahead


3. Track your changes✔️
```
git add . 
```
4. Commit your changes .
```
git commit -m "Relevant message"  (usually title of the pull request)
```
Make sure to condense your changes into a single commit.
5. Push the committed changes in your feature branch to your remote repo.
```
git push -u origin <your_branch_name>
```
6. To create a pull request, click on compare and pull requests. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.



7. Then add an appropriate title and description to your pull request that explains your changes and efforts done.

8. Click on Create Pull Request.



Guidelines for raising a pull request:
Each pull request should have an appropriate and short title like "Fixed Bug in Experience Page"

In case of multiple commits, please perform a rebase and make a squash commit before giving the pull request.

Pull Requests without a description would often not be reviewed. Make sure you describe your intended changes in the description section of the pull request. (Use bullet points and phrases)

Make sure to refer the respective issue in the respective PR using phrases like Resolves #issue_number or Closes #issue_number. Here's an example to raise a PR:
```
 Fixes #640

# Work Done:

- Fixed Responsiveness bug in the MOOC Section of the Education Page
- Made the Favicon more optimized
- ...
- ...
- ...
```
# Relevant Screenshots/Gifs
Refrain from using phrases like "Hi, I am ..", "Please merge me this PR", "Thank You..", etc. We are only interested in technical parts.

Attach a screenshot/clip of the change(s).

Please be patient enough. The project maintainers/mentors would review it as per their schedule. Please do not start putting comments like "Please check this" etc.

Not every PR would be merged directly. In majority of the scenarios, we would be offering some additional suggestions which are to be incorporated in the same PR with a squash commit.

Look out for possible merge conflicts. Please add comments required, this makes your code readable.

Make sensible variable names. For example, card1 is quite ambiguous but education_card implies what that variable is declared for.

Although we support feedback from everyone in all phases of development, it is highly advised not to put any negative comments in other participant's pull requests.

Always keep a note of the deadline.

9. Voila ❗ You have made a PR to the ecommerce-nextjs project 💥 . Sit back patiently and relax while the project maintainers review your PR. Please understand at times the time can vary from a few hours to a few days.
