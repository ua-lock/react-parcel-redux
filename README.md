# React & Redux with Parcel

Boilerplate project with integrated React and Redux using hooks from the react-redux library.

The sample application includes Bulma's CSS Framework for better looks. If you've got something better in mind, just do `npm uninstall bulma` or `yarn remove bulma`, and delete it's import line in the index.js file.

## How to start

Open your command line, then clone this repository:

    $ git clone https://github.com/ua-lock/react-parcel-redux.git

Now, navigate to the cloned folder and install it's dependencies:

    $ cd react-parcel-redux
    $ yarn install

or

    $ cd react-parcel-redux
    $ npm install

Finally, run the development script:

    $ yarn dev

or

    $ npm run dev

The development environment will now be live @ localhost:1234. Open the address on a new browser tab and start experimenting right away. It has hot-reloading included!

## Known issues

- Please if you notice unexpected behavior in the unaltered boilerplate code, open a issue and I'll try to fix it as soon as possible.

## To-do

- Improve the modal component, as it's now using props for it's content (title and body), which isn't intended and it's only purpose was to quickly test out the functionality of the component.

There are a few strategies for dynamically populating the modal content, but it strongly depends on the architecture plan for the application. I'll eventually come out with a more hybrid solution between component state and app state (redux).
