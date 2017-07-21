import React from 'react';
import { firebaseDb } from '../../firebase/index.js'
import ItemBox from './item_box.js'

class ItemListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : []
    }
  }

  render() {
    return (
      <div>
        {this.state.items.map((m, i) => {
          return <ItemBox key={i} item={m} />
        })}
      </div>
    );
  }

  componentWillMount() {
    let ref = firebaseDb.ref('items')
    ref.on('child_added', (snapshot) => {
      const m = snapshot.val()
      let items = this.state.items

      items.push({
        'title' : m.title,
        'image' : m.image,
      })

      this.setState({
        items : items
      });
    })
  }
}

export default ItemListApp

