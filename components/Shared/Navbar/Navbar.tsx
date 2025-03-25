import React from 'react'
import MainHeader from './MainHeader'
import HeaderScroll from './HeaderScroll'
import HeaderTop from './HeaderTop'



export default function Navbar() {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <MainHeader></MainHeader>
            <HeaderScroll></HeaderScroll>
        </div>
    )
}
