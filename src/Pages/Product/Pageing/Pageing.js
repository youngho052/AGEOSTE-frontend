import React, { Component } from 'react';
import './Pageing.scss';
class Pageing extends Component {
    render() {
				const {paging,activeButton } =this.props
        return (
            <div className='Pageing'>
              <button data-idx='1' className={`${activeButton === '1' ? 'active':''}`} onClick={paging} type="button">1</button>
              <button data-idx='2' className={`${activeButton === '2' ? 'active':''}`} onClick={paging} type="button">2</button>
              <button data-idx='3' className={`${activeButton === '3' ? 'active':''}`} onClick={paging} type="button">3</button>
            </div>
        );
    }
}

export default Pageing;