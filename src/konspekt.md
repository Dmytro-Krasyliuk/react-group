FSD Futures Slice Design
Front End

folder + file | 50 files


app 
pages 
widgets 
    profile (user + logout)
features (logic)
    user
        delete
        getUser
        createUser
        getPassword
        user.tsx
    logout
        logout.tsx

entities (сутність, щось)
    user (CRUD)
        model
            types.ts - interface (ts) Яка вона має бути
    message (CRUD)
    contacts (CRUD)
    avatarka (CRUD)
    product (CRUD)
    basket (CRUD)
shared 
    ui - button, img, title | simple | !logic
    api - (back end, pay, tg bot, )







app
pages
widgets
features
entities
shared











Як виглядає компонент в реакті?
- функція
- повертає jsx
- експортується
- пишеться з великої літери


# js in js string
```   let name = 'alex'   ```
```   let text = `hello, my name is ${name} !` ```

# js in react jsx
``` <UiButton text="logout" isShadow={name} /> ```



props 


eslint


const wiki = require('wikipedia');
import










