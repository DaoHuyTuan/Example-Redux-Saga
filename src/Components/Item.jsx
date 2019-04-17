import React from "react";

class Item extends React.Component {
    render() {
        return (
            <div className="item">
                <span>This is Item</span>
                <span className="btnRefresh">Refresh</span>
            </div>
        )
    }
}

export default Item;