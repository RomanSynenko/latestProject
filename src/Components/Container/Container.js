import React from 'react';

import './ContainerStyle.scss'

const Container = ({ children }) => (
    <main className="container">{children}</main>
);

export default Container;