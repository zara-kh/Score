import React from 'react'

export default function Team({ team, dir, teamName }) {
    return (
        <div className='sc-team'>
            <div>
                {
                    dir === 'right' &&  <div>
                                            <p>287/7</p>
                                            <p>(50)</p>
                                        </div>
                }
                <div>
                    <img src={team} alt='Team' />
                </div>
                {
                    dir === 'left' &&   <div>
                                            <p>287/7</p>
                                            <p>(50)</p>
                                        </div>
                }
            </div>
            <div className={ dir === 'right' ? 'sc-right-nickname' : 'sc-left-nickname' }>{ teamName }</div>
        </div>
    )
}
