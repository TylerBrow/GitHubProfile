import React, {Component} from 'react'
import {getUser, getRepo} from '../actions/ApiActions'
import {connect} from 'react-redux'
import Moment from 'moment'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faPlus, faStar, faLaughBeam,  } from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faPlus, faStar, faLaughBeam, )


class GHRender extends Component {

    componentDidMount() {
        getUser()
        getRepo()
    }

    color(a,b) {
        return a.updated_at > b.updated_at ? 1 : -1
    }


    render() {
    return (        
    <div id='body'>
        <div id='header'>
                <div id='headerleft'>
                    <p>icon</p>
                    <input type='text' placeholder='Search or jump to...' />
                    <nav id='headernav'>
                        <p>Pull requests</p>
                        <p>Issues</p>
                        <p>Marketplace</p>
                        <p>Explore</p>
                    </nav>
                </div>
                <div id='headericons'>
                    <FontAwesomeIcon className='headicon' icon={faBell} />
                    <FontAwesomeIcon className='headicon' icon={faPlus} />
                    <img id='avataricon' src={this.props.User.avatar_url} />
                </div>
        </div>
        <div id='container'>
            <div id='leftside'>
                <div id='userprofile'>
                    <img src={this.props.User.avatar_url} />
                    <span id='smile'><FontAwesomeIcon  icon={faLaughBeam} /></span>
                    <p>Set your status</p>
                </div>
                <div id='username'>
                    <h2>{this.props.User.login}</h2>
                </div>
                <button>Edit</button>
            </div>
            <div id='rightside'>
                <nav id='tabs'>
                    <ul>
                        <li>Overview</li>
                        <li>Repositories</li>
                        <li>Projects</li>
                        <li>Stars</li>
                        <li>Followers</li>
                        <li>Following</li>
                    </ul>
                </nav>
                <div id='findrepo'>
                    <input type='text' placeholder='Find a repository...' />
                    <div id='findrepobtn'>
                        <button>Type: <span>All</span></button>
                        <button>Language: <span>All</span></button>
                        <button><span>icon</span> New</button>
                    </div>
                </div>
                <div id='repolist'>
                    <ul>
                    {
                        

                        this.props.Repo.map(item => (
                            <li>
                                <div id='left'>
                                    <h3>{item.name}</h3>
                                    <div className={item.language}> </div><span>{item.language} </span><span> Updated {Moment(item.updated_at).fromNow()}</span>
                                </div>
                                <div id='right'>
                                    <button><span> Star </span><FontAwesomeIcon id ='star' icon={faStar} /></button>
                                    <span>.......</span>
                                </div>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>

        </div>
    </div>
    )}} 


function mapStateToProps(appState) {
    return {
        User: appState.User,
        Repo: appState.Repo
    }
}
export default connect(mapStateToProps)(GHRender)