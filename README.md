# Overview About Project
This project was how to use this website to create your task and can login to your page and modify your task by using AUTH .

## Router Routes:

| Path          | component     | Behavior     |
| ------------- | ------------- |--------------|
| /             | Register      | singnup form |
| /login        | Login         | login form   |
|  /tasks       | Task          | task page    |

## Component :
### Register component :
```js
const newuser = async () => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/regester`, {
        email,
        password,
        role
      });
    } catch (err) {
      console.log(err);
    }
```
### Login component :
```js
const login = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      if (result.data.token) {
        localStorage.setItem("token", result.data.token);
      }
```
### Task compnent :
```js
const taskshow = async () => {
    const result = await axios.get(`${BASE_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${local}`,
      },
    });
    setTask(result.data);
  };
```


![ER Digram ](https://github.com/M0hammed-18/w09d03/blob/main/src/digram/Untitled%20Diagram-Page-1.drawio.png)
