# mfegammademo

# Installing nodejs

`NodeJS` version `20.x` is required. The easiest way to install `NodeJS` is through `nvm`. Click [here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) for more info. After installing `nvm`, simply run:

```sh
nvm install 20
nvm alias default 20
```

# Installing client dependencies

In order to install client dependencies, navigate to the `/client` folder and run:

```sh
yarn
```

# Running the client project

In order to start the client app in a browser:

```sh
yarn dev
```

In order to start only the client app with micro-frontend modules built:

```sh
yarn build
yarn preview
```

# Building the client project

In order to create a production ready build of the client app, you can run:

```sh
yarn build
```
