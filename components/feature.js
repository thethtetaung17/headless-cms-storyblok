import SbEditable from 'storyblok-react';
import DynamicIcon from './icons/dynamicIcon';

const Feature = ({blok}) => {
  return (
    <SbEditable content={blok}>
      <div>
          <DynamicIcon type={blok.icon} />
          <div>
              <div>{blok.name}</div>
              <p>
                {blok.description}
              </p>
          </div>
      </div>
    </SbEditable>
  )
}

export default Feature;
