'use strict';

mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();
// const _code = window.codeTester.getCodeToTest();

describe("#mapBlogs", function(){
    it('should return an array', function(){
        assert.equal(Array.isArray(mapBlogs(blogs)), true);
    });
    it('should return an array of correctly formatted strings', function(){
        assert.deepEqual(mapBlogs(blogs), 
        [
            "Best Top Chef contestants to never win (150 views)",
            "Who should be picked first in fantasy football drafts? (200 views)",
            "Which director had the best ten year period? (86 views)",
            "Biggest snubs from the Sight and Sound list (54 views)"
        ]
          );
    });
    it('should use the native map method', function(){
        let func = mapBlogs.toString();
        assert.equal(func.includes('.map('), true);
    });
});

describe("#filterByCommenter", function(){
    before(function(){
        sinon.spy(Array.prototype, 'filter');
    });
    after(function(){
        Array.prototype.filter.restore();
    });
    it('should return an array', function(){
        assert.equal(Array.isArray(filterByCommenter(blogs)), true);
    });
    it('should return an array of blogs where a specific commenter has commented', function(){
        assert.deepEqual(filterByCommenter(blogs, 'Nathan Coen'), [
            {
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
              },
              {
                title: "Who should be picked first in fantasy football drafts?",
                author: "Kyle Brown",
                text: "Got to go with Christian McCaffrey",
                description: "Sports",
                views: 200,
                comments: [
                  {
                    author: "Nathan Coen",
                    text: "For this year only, I say Cee Dee Lamb."
                  },
                  {
                    author: "Stanley Brown",
                    text: "Why not Tyreek Hill?"
                  },
                  {
                    author: "Buena Clinton",
                    text: "Can I still draft Tom Brady?"
                  }
                ]
              }
        ])
    });
    it('should use native filter method', function(){
        filterByCommenter(blogs, 'Nathan Coen');
        Array.prototype.filter.called.should.be.true;
    });
});

describe("#reduceFirstWordString", function(){
    before(function(){
        sinon.spy(Array.prototype, "reduce");
    })
    it('should return a string', function(){
        assert.equal(typeof reduceFirstWordString(blogs), 'string');
    });
    it('should return a string of only the first words of each blog title', function(){
        assert.equal(reduceFirstWordString(blogs), "BestWhoWhichBiggest");
    });
    it('should use the native reduce method', function(){
        reduceFirstWordString(blogs);
        Array.prototype.reduce.called.should.be.true;
    });
});

describe("#updateBlog", function(){
    let data = {
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
      };
      let array = [ ['title', "Best Top Chefs To Never Win"], ['description', "TV & Film"] ];
      let updated = {
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
      };
    it('should return an object', function(){
        const result = updateBlog(data, array);
        assert.equal(typeof result === "object" && !Array.isArray(result), true );
    });
    it('should return a correctly updated object', function(){
        const result = updateBlog(data, array);
        assert.deepEqual(result, updated);
    });
})

describe("#findBlog", function(){
    let title = "Which director had the best ten year period?";
    let match = "Alex Aaron: I'll take John Carpenter from 1978 to 1988 any day."
    it('should return a string', function(){
        assert.equal(typeof findBlog(blogs, title), "string");
    });
    it('should return a correctly formatted string if matching object is found', function(){
        assert.equal(findBlog(blogs, title), match);
    });
    it('should return a correctly formatted string if no matching object is found', function(){
        assert.equal(findBlog(blogs, "Best Film of 2023"), "(): ...");
    });
    it('should use recursion', function(){
        let original = findBlog;
        findBlog = sinon.spy(findBlog);
        findBlog(blogs, title);
        expect(findBlog.callCount).to.be.above(1);
        findBlog = original;
    });
});