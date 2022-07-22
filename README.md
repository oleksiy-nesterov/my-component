my-component is a simple (develop ready) template for the web component

## Installation

use directly with https://raw.githack.com
```
<script type="module" src="https://raw.githack.com/oleksiy-nesterov/my-component/v1.0.0/dist/index.js"></script>
```

use directly with GitHub Pages, last version of component
```
<script type="module" src="https://oleksiy-nesterov.github.io/my-component/dist/index.js"></script>
```

install via NPM
```
npm install git+https://github.com/oleksiy-nesterov/my-component.git#v1.0.0

npm install git+ssh://git@github.com/oleksiy-nesterov/my-component.git#v1.0.0
```
## Usage

```html
<my-component></my-component>
```

## Browser support

Browsers without native [custom element support][support] require a [polyfill][].

- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/#feat=custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## Development

```
npm start
```

## Rename Component

```
bash rename.sh
```

## Create Release Tag

```
git tag -a v1.0.0 -m "Releasing version v1.0.0" 
git push --tags
```
