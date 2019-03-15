This comnponent is a general wrapper for the `<FontAwesomeIcon />` component released by the people at FontAwesome. This component has access to the Pro license so all regular, heavy, and light icon sets can be utilized.

Check out the selection of icons: [FontAwesomeIcons](https://fontawesome.com/icons)

Import an icon from the icon index file at the root of the directory. In this case, a webpack import alias has already been created. All that needs to be done is the object needs to be imported.
```jsx static
import { faFileImage } from '@fortawesome/fontawesome-pro-light/faFileImage';
```

**Default Icons**
```jsx
const faFileImage = require('@fortawesome/fontawesome-pro-light/faFileImage');
<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
    <Icon
        icon={faFileImage}
        iconSize="xs"
        iconColor="default"
    />
    <Icon
        icon={faFileImage}
        iconSize="sm"
        iconColor="default"
    />
    <Icon
        icon={faFileImage}
        iconSize="md"
        iconColor="default"
    />
    <Icon
        icon={faFileImage}
        iconSize="lg"
        iconColor="default"
    />
    <Icon
        icon={faFileImage}
        iconSize="xl"
        iconColor="default"
    />
    <Icon
        icon={faFileImage}
        iconSize="xxl"
        iconColor="default"
    />
</div>
```

**Color Icons**
```jsx
const faFileImage = require('@fortawesome/fontawesome-pro-light/faFileImage');
<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
    <Icon
        icon={faFileImage}
        iconSize="xs"
        iconColor="default"
    />
    <Icon
        icon={faFileImage}
        iconSize="sm"
        iconColor="success"
    />
    <Icon
        icon={faFileImage}
        iconSize="md"
        iconColor="primary"
    />
    <Icon
        icon={faFileImage}
        iconSize="lg"
        iconColor="grayscale-1"
    />
    <Icon
        icon={faFileImage}
        iconSize="xl"
        iconColor="invalid"
    />
    <Icon
        icon={faFileImage}
        iconSize="xxl"
        iconColor="accent"
    />
</div>
```
