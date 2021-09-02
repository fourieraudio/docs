# Fourier Audio Documentation

This repository contains the docs shown at https://docs.fourieraudio.com. If you just want to read
them, head over there!

We gratefully receive [issues](https://github.com/fourieraudio/docs/issues) (if you've found
something that's missing or incorrect), and [pull
requests](https://github.com/fourieraudio/docs/pulls) (if you're feeling keen and want to improve
something yourself!).

## Contributing
Feel free to create PRs directly from the GitHub online editor; all of the documentation is stored
within files under [docs/](https://github.com/fourieraudio/docs/tree/main/docs).

However, if you're making more significant updates and you want to preview your changes locally,
you can create your own version of the docs on your computer:

1. To start, you'll want to prepare a development environment. Install `nodejs` and `yarn` if you
   don't have them already, using your favourite package manager (`homebrew` is your best bet on
   macOS, or whatever your distribution provides on linux).

2. Clone the repository and install its dependencies:
```console
$ git clone git@github.com:fourieraudio/docs.git
$ cd docs
$ yarn
```

3. Start a local copy of the docs:
```console
$ yarn start
```

4. A browser window opens which will allow you to preview changes live as you make them.

5. Make any updates you want, commit them to a new branch, and open a pull request (there's good
   guides for how to do this on the internet if you're new to it). Your changes will be reviewed and
   merged!
