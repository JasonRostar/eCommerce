import React from 'react';
import MenuItem from '../menu-folder/menu-item.component'
import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/51390225_2090746411215877_3801584259311861760_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=bXXKlUVQpyEAX8OGFqJ&_nc_ht=scontent-sea1-1.xx&oh=2e5828384d93cf698dfde039a640c9b2&oe=5EE65398',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ],
              
        }
    }
    render() {
        return(
            <div className = 'directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        ) 
    }
}

export default Directory;