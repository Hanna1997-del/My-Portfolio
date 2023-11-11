'use client';
import React from 'react'
import { headingStyle, projectStyle, textStyle } from './style';

export default function index({index, title, manageModal}:any) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={projectStyle}>
            <h2 className={headingStyle}>{title}</h2>
            <p className={textStyle}>Design & Development</p>
        </div>
    )
}
