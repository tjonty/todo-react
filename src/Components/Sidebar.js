import React from 'react';

const Sidebar = ({setStatus, status}) => {

    return (
        <div className="sidebar">
            <button className={`btn-sb ${status === "All" ? "sb-btn-click" : '' }`} onClick={() => setStatus('All')}>All</button>
            <button className={`btn-sb ${status === "Completed" ? "sb-btn-click" : '' }`} onClick={() => setStatus('Completed')}>Completed</button>
            <button className={`btn-sb ${status === "Uncompleted" ? "sb-btn-click" : ''}`} onClick={() => setStatus('Uncompleted')}>Uncompleted</button>
        </div>
    );
}

export default Sidebar;