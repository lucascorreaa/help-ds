import React from 'react'
import { MarqueeContainer, MarqueeContent } from './marquee'

export interface MarqueeProps {
    description: string
}

export const Marquee: React.FC<MarqueeProps> = ({ description }) => {
    return (
        <MarqueeContainer>
            <MarqueeContent>{description}{description}</MarqueeContent>
        </MarqueeContainer>
    )
}