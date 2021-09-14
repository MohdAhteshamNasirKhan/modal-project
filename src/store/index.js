import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
    // plugins: [createPersistedState()],
    state: {
        studentData: {},
        loginDetail: {}
    },
    mutations: {
        setContent(state,res){
            state.studentData = res
        },
        LoginDataSave(state,resp){
            state.loginDetail = resp
        }
        
    },
    actions: {
        SetUserContent(context,regData){
            console.log("data",regData)
            context.commit('setContent',regData)
        },
        LoginData(context,LdapLoginData){
            context.commit('LoginDataSave',LdapLoginData)
        }
        // AddPost(context,blogdata) {
        //         axios.post('http://localhost:5001/createblog',blogdata)
        //         .then(resblogdata => {
        //             context.commit('setResBlogData',resblogdata)
        //         })
        //         console.log(blogdata)
              
        // },
        // UpdatePostData(context,id){
        //     axios.patch('http://localhost:5001/updateblog',id)
        //     .then(resblogdata => {
        //         // context.commit('setResBlogData',resblogdata)
        //         console.log(resblogdata)
        //     })
        //     // console.log(blogdata)
         
        // },
        // AllGetPost(context){
            
        //     axios.get('http://localhost:5001/getallblog')
        //     .then(resgetdata => {
        //         context.commit('setAllGetPost',resgetdata.data)
        //     })
        // },
        // RegisterUser(context,regData){
        //     // context.items = regData
        //     // console.log(context.items)
        //     axios.post("http://localhost:5001/register",regData).then(res=>{console.log(res.data)})
        //     // console.log(regData)
        // },
        // LoginUser(context,loginData){
        //     axios.get("http://localhost:5001/login",loginData).then(res=>{console.log(res.data)})
        // }
    }
})