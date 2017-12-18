# ExampleAngular

### The project was implemented on the basis of tasks

1) Periodically (every 10 seconds) poll for new posts from this api via [URL](https://hn.algolia.com/api/v1/search_by_date?tags=story) get request.
2) Display the title, url, created_at and author of each post in table
3) Upon selecting a row in the table, a modal should appear containing the raw JSON data of post. 
 This modal should support dismissal by clicking outside of the modal as well as upon clicking a close button
4) Support the ability to filter/search the table by title


### System dependencies
- [Node](https://nodejs.org) version `8.2.1`
- [Angular CLI](https://github.com/angular/angular-cli) version `1.1.3`


### Installing
```
  yarn install
```


### Usage

Run `yarn start` for a dev frontend server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
