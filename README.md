# React + Vite

## Importing Compos

#### if the file name is Compo.jsx we should -> import MyCompo from "./Compo No matter function name is.

## Work with forms with React Controlled way

#### No need to instal any

```bash
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

## Work with forms with React-Hook-Form

#### First install these

```bash
npm install react-hook-form
npm install yup
npm i @hookform/resolvers
```

#### Usage

```bash
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSchema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // this will show error msg
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p>{errors.password.message}</p>
        )}
      </div>

      <div>
        <button>
          Submit
        </button>
      </div>
    </form>
  );
};

export default App;
```
