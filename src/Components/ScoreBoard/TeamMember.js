import React from 'react'

export default function TeamMember({ dir }) {
    return (
        <div className={`sc-member ${dir === 'right' ? 'sc-right-member' : 'sc-left-member'}`} >
            {
                dir === 'right' && <div>
                    <p>Leonel Messi</p>
                    <p>71(69)</p>
                </div>
            }
            <div>
                <img src='https://specials-images.forbesimg.com/imageserve/5f40eb23906f581e186d136e/960x0.jpg?fit=scale' alt='member' />
            </div>
            {
                dir === 'left' && <div>
                    <p>Leonel Messi</p>
                    <p>71(69)</p>
                </div>
            }
        </div>
    )
}
