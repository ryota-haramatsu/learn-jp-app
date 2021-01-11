const state = {
    // ログイン済みユーザーを保持するuser
    user: null
}

const getters = {}

const mutations = {
    // 第一引数はステート,実引数は第二引数から
    setUser(state, user) {
        state.user = user
    }
}

const actions = {
    // 会員登録API
    // 第一引数はコンテキストオブジェクト(ミューテーションを呼び出すための commit メソッドなどが入っている)
    // setUserミューテーションを実行し、userステートを更新
    // アクション→コミットでミューテーション呼び出し→ステート更新
    async register(context, data) {
        // console.log('context: ' + context + '/ data:' + data)
        const response = await axios.post('/api/register', data)
            .catch(error => {
                console.log("ERRRR: ",error.response.data);
            });
        context.commit('setUser', response.data) 
    },
    async login(context, data) {
        const response = await axios.post('/api/login', data)
            .catch(error => {
                console.log("ERRRR: ",error.response.data);
            });
        context.commit('setUser', response.data)

    },
    async logout(context) {
        const response = await axios.post('/api/logout')
            .catch(error => {
                console.log("ERRRR: ",error.response.data);
            });
        context.commit('setUser', null)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
