import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    g1:[],
    g2:[],
    g3:[]/*,
    gui:[{
            "nameClerk": "pierre",
            "idCurrent": 201,
            "id": 1
        }
    ]*/
    
}

//to handle state
const getters = {}

//to handle actions
const actions = {

    getGuichet({ commit }) {
        setInterval(function(){
            axios.get('http://localhost:5001/api/getallguichets')
            .then(response => {
               // let res = response.data.length
                //commit(`SET_GUICHET`, response.data)
                //console.log(response)
                for(let i=0;i<response.data.length;i++)
                {
                     /*   axios.get(`http://localhost:5001/guichets/${i}`)
                        .then(response => {*/
                            //console.log(response.data[i])
                            commit(`SET_POSTS${i+1}`, response.data[i])
                   // })
                }
        })
         }, 1000);
    }
    /*,

    getPosts1({ commit }) {
        setInterval(function(){
            axios.get('http://localhost:2323/clerks')
            .then(response => {
                commit('SET_GUICHET', response.data)
        })
         }, 1000);

    }*//*,
    getPosts2({ commit }) {
        setInterval(function(){
            axios.get('http://localhost:2323/clerks/2')
            .then(response => {
                commit('SET_POSTS2', response.data)
        })
         }, 1000);

    },
    getPosts3({ commit }) {
        setInterval(function(){
            axios.get('http://localhost:2323/clerks/3')
            .then(response => {
                commit('SET_POSTS3', response.data)
        })
         }, 1000);
/*/
  //  }
}

//to handle mutations

const mutations = {
    /*
    SET_GUICHET(state, posts) {

        let tes = posts.length
        if(state.gui.length === tes)
        {
            for(let i=0; i<state.gui.length; i++)
            {   console.log('poule')
                state.gui[i].nameClerk = posts[i].nameClerk
                state.gui[i].id = posts[i].id
                state.gui[i].idCurrent = posts[i].idCurrent
            }
           
        }
        else if(state.gui.length > tes)
        {
            let diff = tes -state.gui.length
            for(let i=0; i<diff;i++)
            {
                state.gui.pop()
            }
           
        }
        else
        {
          //  let diff = tes -state.gui.length
            for(let j=0; j<state.gui.length; j++)
            {

                for(let i=0; i<tes; i++)
                {
                    
                    if(state.gui[j].nameClerk !== posts[i].nameClerk)
                    { 
                        //console.log('salut')
                        console.log(state.gui)
                        state.gui.push(posts[i])
                    }
                }
            }
        }
         
    },*/

    SET_POSTS1(state, posts) {
        state.g1 = posts
    },
    SET_POSTS2(state, posts) {
        state.g2 = posts
    },
    SET_POSTS3(state, posts) {
        state.g3 = posts
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})