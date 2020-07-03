1. ###### 发布指南
```
yarn run perdeploy
yarn run deploy
```

2. ###### react-router学习

* Prompt 路由跳转确认弹窗

```jsx
 let isBlocking = true;
 <Prompt
    when={isBlocking}
    message={location =>
        `Are you sure you want to go to ${location.pathname}`
    }
/>
```

3. 静态路由 react-router-config学习


                
