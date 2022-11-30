`#git-basics-vscode` `#assembler-institute` `#master-in-software-development`

# Assembler Institute: Git basics - VSCode exercises <!-- omit in toc -->

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/git_logo.png" width="500px" />

With these exercises you will learn how to use git in your VSCode interface.

## Introduction

Git is a version control software designed by Linus Torvalds, thinking about the efficiency and reliability of maintaining application versions when they have a large number of source code files. Its purpose is to keep track of changes in computer files and coordinate the work that several people do on shared files.

## What are the main objectives in this project?

* Learn how to work with Git using the integrated VSCode Git plugin

## 1. General analysis

In this pill you will learn how to use the integrated VSCode Git plugin to work with Git to perform the most common operations such as creating commits or working with branches.

### 1.1 Git Local Repository

Next, you will need to follow the instructions to complete the exercises:

**1.2.0 Clone the repository to create a local copy on your computer:**

[https://github.com/assembler-school/git-basics-vscode.git](https://github.com/assembler-school/git-basics-vscode.git)

1. Execute in the terminal the following command to install the necessary programs for the pill: `npm install`
2. Once the command is finished you can continue with the exercises

**1.2.1 exercise-01: Create a new file and add it to the staging area**

1. Create a new file named: `exercise-01.txt` inside the `src/exercises` folder
2. Add any text value inside the new file and save the new file
3. Add the file to the staging index with the Git plugin
4. Execute the: `npm run validate-exercise-01` command from the  terminal to validate your solution to the exercise

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-01.png" width="750px" /><br>

**1.2.2 exercise-02: Create a commit with the new file**

1. Create a new commit based on the changes in the staging area that have the new file you just created
2. Use a commit message of: `'commit exercise-02'`
3. Execute the: `npm run validate-exercise-02` command from the  terminal to validate your solution to the exercise

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-02.png" width="750px" /><br>

**1.2.3-a exercise-03-a: Create 2 new files and add all of them to the staging area**

1. Create 2 new files inside the src/exercises folder with the names of: 
    1. `exercise-03-a.txt`
    2. `exercise-03-b.txt`
2. Add any text value inside each file and save them
3. Add all of them to the staging area with the Git plugin
4. Execute the: `npm run validate-exercise-03-a` command from the  terminal to validate your solution to the exercise

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-03.png" width="750px" /><br>

**1.2.3-b exercise-03-b: Create a new commit with the new files**

1. Create a commit with all the new files with the commit message of: `'commit exercise-03'`
2. Execute the: `npm run validate-exercise-03-b` command from the  terminal to validate your solution to the exercise

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-04.png" width="750px" /><br>

**1.2.4-a exercise-04-a: Make a change and add it to the staging index**

1. Change the content of the `exercise-03-a.txt` file and add the changes to the staging index with the Git plugin
2. Execute the: `npm run validate-exercise-04-a` command from the  terminal to validate your solution to the exercise

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-05.png" width="750px" /><br>

**1.2.4-b exercise-04-b: Use the git plugin to unstage the changes**

1. Use the git plugin to unstage the changes from the staging index
2. Now you should see that the changes were added back to the working directory and out of the staging index
3. Execute the: `npm run validate-exercise-04-b` command from the  terminal to validate your solution to the exercise

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-06.png" width="750px" /><br>

**1.2.5 exercise-05: Use the git plugin to discard all the changes made to a file**

1. Use the git plugin to discard all the changes made to the file so that the working directory is cleaned using the **Discard All Changes** option
2. This command will remove all the changes you made to the file and they will be deleted. This is useful if you don’t want to keep the changes that you made so far.
3. **NOTE**: This command removes the changes, you will not be able to recover them once they are removed.
4. Execute the: `npm run validate-exercise-05` command from the  terminal to validate your solution to the exercise

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-07.png" width="750px" /><br>

### 1.3 Git Branches

**1.3.1 exercise-06: Create a new branch named develop and make a commit**

1. Use the Git plugin to create a new branch named `develop` using the `Checkout to` option and then the `Create new branch` option to create a new branch
2. This command will create a new branch and switch from the current branch to it afterwards

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-08.png" width="750px" /><br>

3. Create a new file named `exercise-06.txt` in the  the `src/exercises` folder that has any value inside and **create a new commit with the new file with any commit message**

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-09.png" width="750px" /><br>

4. Execute the: `npm run validate-exercise-06` command from the  terminal to validate your solution to the exercise

**1.4.2 exercise-07: Switch back to the master branch**

1. Use the Git plugin to switch back to the `master` branch
2. Execute the: `npm run validate-exercise-07` command from the terminal to validate your solution to the exercise

**1.4.3 exercise-08: Use the git plugin to push the repository to the GitHub platform**

1. Create a new empty repository in the GitHub platform and copy the origin URL
2. Copy the URL from the `git remote add origin https://...` step that says `...or push an existing repository from the command...`
3. Open the VSCode **Command Palette** with CMD + SHIFT + P (MAC) or CTRL + SHIFT + P (WIN) and type **Git Remote** and choose the **Git Remote Remove** option to remove the current remote of the repository.

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-10.png" width="750px" /><br>
<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-11.png" width="750px" /><br>

4. You can execute the following command in the terminal to see a list of the current remote URLs in your local repository to see if it was removed:
    * `git remote -v`
5. Open the VSCode Command Palette again and add the remote repository URL from the GitHub platform as the new **origin** of your local repository
6. Type the following in the Command Palette to add a new remote repository URL:

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-12.png" width="750px" /><br>

Set the remote repository name, usually it is **origin**:<br>
<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-13.png" width="750px" /><br>

Set the remote origin URL for the **origin** remote repository URL:<br>
<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-14.png" width="750px" /><br>

7. Open the VSCode Command Palette again and type **git push** to upload the local repository to the remote repository

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-15.png" width="750px" /><br>

8. Then, you will be asked if you want to set the remote repository URL as tracking so that all the following GIT Pull/Fetch operations are made with this URL. (choose yes/ok)

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-16.png" width="750px" /><br>

9. Next, you will have to enter your username and password:

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-17.png" width="750px" /><br>
<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-18.png" width="750px" /><br>

10. Execute the: `npm run validate-exercise-08` command from the  terminal to validate your solution to the exercise

**Now your local repository should be published in Github.**

### 1.4 Git Stashes (Optional)

**1.4.1 exercise-09: Create a new stash entry without a message**

1. Change the contents of the `exercise-03-a.txt` file and save the file
2. Use the GIT plugin to create a **new stash entry without a message** using the `Stash` option
3. This command will create a new stash entry with the changes that you made to the file.

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-19.png" width="750px" /><br>

4. Then you can use the `git stash list` command to see a list of all the stash entries that you made, or the the `git stash show stash@{0}` command to see the files that were affected by the stash entry number 0
5. Stash entries are 0 indexed like arrays
6. If you’d like to see the changes made in the stash you can use the following command to see the code changes in the stash entry: 
    * `git stash show --patch stash@{0}`
7. Execute the: `npm run validate-exercise-09` command from the  terminal to validate your solution to the exercise

**1.4.2 exercise-10: Remove the stash entry and apply the changes again**

1. Use the GIT plugin and the `Pop Latest Stash` option to remove the stash entry from the stash and apply the changes to the working directory
2. This command will remove the latest stash entry from the stash and apply the changes in the working directory.
3. Execute the: `npm run validate-exercise-10` command from the  terminal to validate your solution to the exercise

**1.3.3 exercise-11: Create a new stash entry with a message**

1. Create a new stash entry with the changes made to the `exercise-03-a.txt` file from the previous steps
2. Use the GIT plugin  command to create a new entry that has a stash message of: `'my stash message'`

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-20.png" width="750px" /><br>

3. This will create a new stash entry like the exercise-09 but one that has message that you define
4. Execute the: `npm run validate-exercise-11` command from the  terminal to validate your solution to the exercise

**1.3.4 exercise-12: Clear the stash list**

1. Run the GIT command in the VSCode terminal to remove all the stash entries from the stash
    * `git stash clear`
2. This will remove all the stash entries from the stash
3. Execute the: `npm run validate-exercise-12` command from the  terminal to validate your solution to the exercise

**1.3.5 exercise-13: Create a new file and store it in a stash entry**

1. Create a new file named `exercise-13.txt` in the `src/exercises` folder and store any text value inside
2. Use the GIT plugin and the `Stash Include Untracked` option to create a new stash entry that also stashes files that are not tracked by GIT with a stash message of: `'stash with untracked files'`
3. Execute the: `npm run validate-exercise-13` command from the  terminal to validate your solution to the exercise

<img src="https://raw.githubusercontent.com/assembler-institute/git-basics-vscode/main/utils/img/vscode-examples/git-vscode-example-21.png" width="750px" /><br>

## Requirements

- You must perform all the steps using only the VSCode Git plugin and only the ones that are specified to be run with the terminal should be done with the terminal
- You must create a new repository to upload the finished exercises

## Deliverables

The following deliverables will be necessary to evaluate the project:

- The repo uploaded to a Github repository with the solutions to the exercises

## Resources

- [Official GIT](https://git-scm.com/)
- [Guide](https://rogerdudler.github.io/git-guide/)
- [Official practice guide](https://guides.github.com/activities/hello-world/)
- [Git Cheat sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [PRO GIT book](https://git-scm.com/book/en/v2)
- [Visual GIT guide](http://marklodato.github.io/visual-git-guide/index-en.html)
- [Learn GIT](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
- [Interactive graphical example GIT](https://git-school.github.io/visualizing-git/#free-remote)
- [Learn GIT](https://learngitbranching.js.org/)