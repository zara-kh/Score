import React from 'react';

import TeamMember from './TeamMember';

export default function TeamMembers({ flag, tm }) {
    return (
        <>
            <div className='sc-team-title'>
                <div></div>
                <div>
                    <p><img src={ flag } alt='team' /> <span>India 287/8(50)</span></p>
                </div>
                <div></div>
            </div>
            { tm === '1' ? <div className='sc-team-members'>
                <TeamMember dir='left' member={ {name:'David Warner', img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9H3CJ-CeP3SmTJ2MlOe41r-l7zyQT036atGQGKanZdVIHEmPn5YcZzhsGpmbMajaq92L27WprRH6HKFa8GcH2o7Govr25kEqoIg"} } />
                <TeamMember dir='right' member={{name:'Vijay Shankar', img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-x6jJgpLd83L2fQ8FRSNG3dqUzWbLkmxI5pw1i3nSCUrVuYWOeZWqvroACg6kv0ORXs5hCm4oSGx0Q3_bHikMxxsaHzB0ViTXMA' }} />
                <TeamMember dir='left' member={{name:'Jonny Bairstow', img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwW48FzJ4q5SReM4Puc3akYhpZn1h78uD5keRcQ52pvUX6IlpzYakyfHcJ7k0AwEtAanfTjzhItOw0Za8R32HyiB6QiY6Qd-ADOw' }} />
                <TeamMember dir='right' member={{name:'Nitish Rana', img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyatRWKa37a2R9OtC1PUGqD9Tly_JFH2e1UPwqx6oWDt7cMd_Fy_pqnRfMxAmWwFxWfQXUt4whwQOI1HLu9btFNMfD2pxoFBfLDQ' }} />
                <TeamMember dir='left' member={{name:'Andre Russell', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNamQnYaiTNS8c3zpMCnzOGpChNBMbk0lL0BqY74V_NnmHB7_899iAKZ8SycKcX2eISJzmUWvu5JlSAAS2SmAD0458CNB1F24Vg' }} />
                <TeamMember dir='right' member={{name:'Robin Uthappa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eVIfnzbl_sPJuHk5qIxqhe7tKLiM4ZDVA5LP2J5fw9io48luGNL0QOL5-BQeehsw9m6NdfWlBHkU1U_14C9xydUz7HF-KC68pn0' }} />
            </div> : <div className='sc-team-members'>
                <TeamMember dir='left' member={ {name:'Piyush Chawla', img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHYQm6jNFfg-oc0iLzTN4CMq_Tvtnfc9mCfdWNIxdHVREY6kxO0UgdsWyeBh6zSrnJQvdkixDkUhfTtk_0U0fmEXHgjZKiwSSl9g"} } />
                <TeamMember dir='right' member={{name:'Moeen Ali', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBrCeLAM2P7mExl4yotaimjJVqzjhAGe7_i-pJOv20POM2EQ45jriwNJeuv6YfUKJe24RU2Y8K8PUY3HUJmha-HG7hf_2JJAj0A' }} />
                <TeamMember dir='left' member={{name:'Rashid Khan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRbQHkAtfv7b2JY91CaKQsUXdbgFw6-YEtdNtPVnib2vVnwSfqJnQ-s3KkNMuYLYj2hCOWXodGf4yaxlgU8xnrcBrpt8HOAo6KA' }} />
                <TeamMember dir='right' member={{name:'Siddarth Kaul', img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyatRWKa37a2R9OtC1PUGqD9Tly_JFH2e1UPwqx6oWDt7cMd_Fy_pqnRfMxAmWwFxWfQXUt4whwQOI1HLu9btFNMfD2pxoFBfLDQ' }} />
                <TeamMember dir='left' member={{name:'Shakib Al Hasan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2G5WN-J35PIiV6vPcfcE-3LCJT2g_FJH4pC15ZHJzhejK4_jIT6gJkc2-dZtlk0mMEqlWgja2jhgbNXOgRgcwthviXfK7xrgNA' }} />
                <TeamMember dir='right' member={{name:'Axar Patel', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwI4crSMSNE50QayhwBcTgnOzjCSKdpoh6F49oGoQYlv_qUY6KEFvWKshMRddgQXw4ppJduBY-baUY6FNKOMCGPVY3pvhj6cn3Q' }} />
            </div>
            
            }
        </>
    )
}
