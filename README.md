### Bootcamp Required Practice Exam

1. Create a function called `mapBlogs` that takes in an `array` of blog objects. This function should use the native map method to create a new array of strings that includes the blog object's title and the number of views in parentheses. 

```javascript
mapBlogs(blogs); // RETURNS =>
[
  "Best Top Chef contestant to never win (150 views)",
  "Who should be picked first in fantasy football drafts? (200 views)",
  "Which director had the best ten year period? (86 views)",
  "Biggest snubs from the Sight and Sound list (54 views)"
]
```

2. Create a function called `filterByCommenter` that takes in two parameters - `array` and `commenter`; `array` represents an array of blog objects; `commenter` represents a string of a comment author. This function should use the native filter method to return a new array of only the blog objects that have comments from the input commenter.

3. Create a function called `reduceFirstWordString` that takes in an `array` of blog objects. This function should use the native reduce method to return a new string of only the first words in each blog title.

```javascript
reduceFirstWordString(blogs); // RETURNS => "BestWhoWhichBiggest"
```

4. Create a function called `updateBlog` that takes in two parameters - `blog` and `props`; `blog` represents a blog object; `props` represents an array of subarrays. Each subarray contains a key and a value to update in the input blog object. This function should access each subarray in the input `props` array to update the key and value in the input blog object.

```javascript
updateBlog({
      title: "Best Top Chef contestants to never win",
      author: "Stephanie Cooper",
      text: "Nina Compton was robbed!",
      description: "Food & Drink",
      views: 150,
      comments: [
        {
          author: "Bethany Jones",
          text: "My choice would be Stefan."
        },
        {
          author: "Nathan Coen",
          text: "Brooke's loss in Seattle was heartbreaking."
        }
      ]
    }, [ ['title', "Best Top Chefs To Never Win"], ['description', "TV & Film"] ]); 

    // RETURNS =>
    {
      title: "Best Top Chefs To Never Win",
      author: "Stephanie Cooper",
      text: "Nina Compton was robbed!",
      description: "TV & Film",
      views: 150,
      comments: [
        {
          author: "Bethany Jones",
          text: "My choice would be Stefan."
        },
        {
          author: "Nathan Coen",
          text: "Brooke's loss in Seattle was heartbreaking."
        }
      ]
    }
```

5. Create a function called `findBlog` that takes in two two parameters - `array` and `title`; `array` represents an array of blog objects; `title` represents a string of the title of a blog to search for. This function should use recursion to iterate through the input array. If a blog is found with the matching title, the function should return a string of the blog's author followed by the text of the blog (see example below). If a blog is not found matching the input title, the function should return a string of empty parentheses followed by an elipses (see example below).

```javascript
findBlog(blogs, "Which director had the best ten year period?");
// RETURNS => "Alex Aaron: I'll take John Carpenter from 1978 to 1988 any day."

findBlog(blogs, "Best Film of 2023");
// RETURNS => "(): ..."
```

6. Create a function called `createForLoop` that takes in three paramters - `array`, `start`, `update`, and `direction`; `array` represents any array of items; `start` represents the starting index for the for loop to iterate over array; `update` represents a number to increment or decrement the counting variable in the for loop; `direction` will either be 'ascending' or 'descending'. If `direction` is 'ascending', the for loop should iterate normally through the array; if `direction` is 'descending' the for loop should should iterate through the array in reverse. As the for loop iterates, it should grab every array item it's accessing and push it to an output array. The function should return that output array.

```javascript
createForLoop(['a', 'b', 'c', 'd', 'e', 'f'], 1, 2, 'ascending'); 
// RETURNS => ['b', 'd', 'f']

createForLoop(['a', 'b', 'c', 'd', 'e', 'f'], 4, 2, 'descending');
// RETURNS => ['e', 'c', 'a']
```

