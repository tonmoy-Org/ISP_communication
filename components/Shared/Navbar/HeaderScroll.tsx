'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MainHeader from './MainHeader';




interface HideOnScrollProps {
    children: React.ReactElement;
    window?: () => Window;
}

function HideOnScroll(props: HideOnScrollProps) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

interface HideAppBarProps {
    window?: () => Window;
}

export default function HeaderScroll(props: HideAppBarProps) {
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar sx={{ backgroundColor: 'white', p: 0 }}>
                    <MainHeader></MainHeader>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
}