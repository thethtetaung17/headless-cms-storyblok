import Teaser from './teaser';
import Placeholder from './placeholder';
import Grid from './grid';
import Feature from './feature';

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature
}

const DynamicComponent = ({blok}) => {
  console.log(blok)
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent;
