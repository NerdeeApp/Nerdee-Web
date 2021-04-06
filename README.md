# Nerdee Web App

# <u><b>MUST READ!</b></u>

<a id="home"></a>
## Index
- [Home](#home)
- [Todo](#todo)
- [Running the app](#running)
- [Building for prod](#building)
- [Contributing](#cont)
- [Help/Docs](#help)

---
<a id="todo"></a>
## TODO
- [X] Create basic landing page
- [ ] Create multi-page funtionality
- [ ] Link with backend
- [ ] Create useable, responsive CSS
- [ ] Make better documentation

---
<a id="running"></a>
## Running the app
Install all packages with `yarn`  
Run `yarn start` to launch it in a live browser tab  
You can now edit pages without needing to reload the tab.  
  
If you close the tab, you can reopen it in [localhost:3000](http://localhost:3000)

---
<a id="building"></a>
## Building for production
Run `yarn start` to make sure your version is working.  
Once the app is working, you can run `yarn run build` to create an optimised version.  
To make the build open, you can run
- `yarn global add serve`
- serve -p 80 -s build`  

with port `80` being the port accessed from the browser. The default is port `5000`  
You can then access the local build in [localhost:80](http://localhost:80/) or whatever port you chose.

---
<a id="cont"></a>
## Contributing
Please contribute non-essential features to a new branch with the prefix of `feature-(name)`  
All essential features should have the prefix `essential-(name)` or `urgent-(name)`  
e.g. an essential security fix is needed, team 1 add it as name `essential-bug-fix`. \
They then open a pull request for the branch to be merged with master.  

# Do not push directly to master, make a new branch

---
<a id="help"></a>
## External Help/Docs
- ### [How do I make a new pull request?](https://opensource.com/article/19/7/create-pull-request-github)
- ### [React Typescript Docs](https://www.typescriptlang.org/docs/handbook/react.html)
- ### [React-Router-DOM Docs](https://reactrouter.com/web/api/)
- ### [StackOverflow team](https://stackoverflow.com/c/nerdee-devs/)