# eslint-plugin-is-story-prefix

A eslint plugin to check if filename has a prefix

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-is-story-prefix`:

```sh
npm install eslint-plugin-is-story-prefix --save-dev
```

## Usage

Add `is-story-prefix` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "is-story-prefix"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "is-story-prefix/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


