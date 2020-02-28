import React from 'react';
import '../App.css';
class LimpaList extends React.Component {
    render() { 
        const {item, LimpaList, handleDelete} = this.props;
        return (<button type="submit" className="delete">Limpar</button>
     );
   }
}
 
export default LimpaList;