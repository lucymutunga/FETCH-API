
//Getting a resource

fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  //Posting a resource

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    //listing a resource
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));

    //Updating a resource
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    //creating a resource
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }), 
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    //Deleting a resource
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',   
    });
    //Updating a resource partially
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    //Listing nested resources
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response) => response.json())
    .then((json) => console.log(json));
    //posting a nested resource
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
    method: 'POST',
    body: JSON.stringify({
        name: 'foo',
        email: 'bar',
        body: 'baz',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    //posting a nested resource
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
    method: 'POST',
    body: JSON.stringify({
        name: 'foo',
        email: 'bar',
        body: 'baz',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    //filtering resources
    fetch('https://jsonplaceholder.typicode.com/posts?userId=7')
    .then((response) => response.json())
    .then((json) => console.log(json));

    




