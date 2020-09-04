import React from 'react';

import TeamMember from './TeamMember';

export default function TeamMembers({ flag }) {
    return (
        <>
            <div className='sc-team-title'>
                <div></div>
                <div>
                    <p><img src={ flag } alt='team' /> <span>India 287/8(50)</span></p>
                </div>
                <div></div>
            </div>
            <div className='sc-team-members'>
                <TeamMember dir='left' />
                <TeamMember dir='right' />
                <TeamMember dir='left' />
                <TeamMember dir='right' />
                <TeamMember dir='left' />
                <TeamMember dir='right' />
            </div>
        </>
    )
}
