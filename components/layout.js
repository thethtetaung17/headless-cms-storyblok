import StoryblokService from '../utils/storyblok-service';

const Layout = ({ children }) => (
    <div>
        {children}
        {StoryblokService.bridge()}
    </div>
)

export default Layout;
