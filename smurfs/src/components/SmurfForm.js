import React,{useState} from 'react'
import { connect } from 'react-redux'
import {postSmurf} from '../actions/actions'

const SmurfForm = (props) => {

    const [theSmurf, setTheSmurf] =useState({
        name:'',
        age:'',
        height:''
    })

    const smurfHandler = e => {
        setTheSmurf({
            ...theSmurf,
            [e.target.name]: e.target.value
        })
    }

    const submitSmurf =e => {
        e.preventDefault()
        props.postSmurf(theSmurf)

    }
    console.log('propsinform',props)
    return(
        <>
            <h3>Add a Lil Smurf</h3>
            <input name='Name' value={props.name} placeholder='Name' onChange={smurfHandler} className="input"/>
            <input name='Age' value={props.age} placeholder='Age' onChange={smurfHandler} className="input" />
            <input name='Height' value={props.height} placeholder='Height' onChange={smurfHandler} className="input" />
            <button onClick={submitSmurf}>Add Smurf</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error

    }
}

export default connect(mapStateToProps,{postSmurf})(SmurfForm)