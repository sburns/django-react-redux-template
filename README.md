#Django React Redux Template

## Setup

### Create and activate a virtual environment

#### Using Virtual Environment Wrapper Package

```
mkvirtualenv [name]
```

or

#### Using Virtual Environment Package

```
virtualenv ~/.virtualenvs/[name]
source ~/.virtualenvs/[name]/bin/activate
```

### Install Front End Dependencies
```
cd app/client && npm install
```

### Run webpack dev server
```
npm start || npm run watch
```

### Build static assets for development
```
npm run build:local
```

### Build static assets for production
```
npm run build:prod
```