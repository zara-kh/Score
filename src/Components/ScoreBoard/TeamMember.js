import React from 'react'

export default function TeamMember({ dir, member }) {
    return (
        <div className={`sc-member ${dir === 'right' ? 'sc-right-member' : 'sc-left-member'}`} >
            {
                dir === 'right' && <div>
                    <p>{member.name}</p>
                    <p>2/40(7)</p>
                </div>
            }
            <div>
                <img src={member.img} alt='member' />
            </div>
            {
                dir === 'left' && <div>
                    <p>{member.name}</p>
                    <p>71(69)</p>
                </div>
            }
        </div>
    )
}
